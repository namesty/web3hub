import { ZERO_ADDRESS } from './../../constants';
import { namehash } from "ethers/lib/utils"
import { Base58 } from "@ethersproject/basex";
import { ENS_REGISTRY } from "../../constants"
import { Ethereum } from "../../utils/ethereum"
import { ethers } from "ethers"

export const getContentHash = async (web3: Ethereum, domain: string) => {
  const resolverAddress = await web3.callView(
    ENS_REGISTRY,
    "function resolver(bytes32 node) external view returns (address)",
    [namehash(domain)],
  );

  if(resolverAddress === ZERO_ADDRESS) {
    return "";
  }

  const hash = await web3.callView(
    resolverAddress,
    "function contenthash(bytes32 node) external view returns (bytes)",
    [namehash(domain)],
  );

  if (hash === "0x") {
    return "";
  }

  if (
    hash.substring(0, 10) === "0xe3010170" &&
    ethers.utils.isHexString(hash, 38)
  ) {
    return Base58.encode(ethers.utils.hexDataSlice(hash, 4))
  } else {
    throw Error(`Unkown CID format, CID hash: ${hash}`);
  }
}