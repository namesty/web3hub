import { providers } from "ethers";
import ENS, { getEnsAddress } from "@ensdomains/ensjs";
import { helpers } from "content-hash";

interface CheckContentResponse {
  valid: boolean;
  message?: string;
}

export const checkContentIsValid = async (
  pointers: string[],
  location: string
): Promise<CheckContentResponse> => {
  const provider = new providers.JsonRpcProvider(process.env.RPC_NODE);

  const ens = new ENS({
    provider,
    ensAddress: getEnsAddress("1"),
  });

  const getContents = async (
    pointers: string[]
  ): Promise<{ value: string }[]> => {
    const contentsPromises = pointers.map((p) => {
      return ens.name(p).getContent();
    });
    return await Promise.all(contentsPromises);
  };

  const contents = await getContents(pointers);
  const unvalidPointers = contents.filter(({ value }) => {
    return !value;
  });

  if (unvalidPointers.length) {
    return {
      message: `Pointer: ${unvalidPointers[0]} is not registered`,
      valid: false,
    };
  }

  const unvalidLocation = contents.filter(({ value }) => {
    const hash = value.split("/").slice(-1)[0];
    const decodedContent = helpers.cidV0ToV1Base32(hash);
    return !location.includes(decodedContent);
  });

  if (unvalidLocation.length) {
    return {
      valid: false,
      message: `Pointer: ${unvalidLocation[0]} is not pointing to given location`,
    };
  }

  return { valid: true };
};
