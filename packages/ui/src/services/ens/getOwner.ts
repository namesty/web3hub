import { namehash } from "ethers/lib/utils"
import { ENS_REGISTRY } from "../../constants"
import { Ethereum } from "../../utils/ethereum"

export const getOwner = async (web3: Ethereum, domain: string) => {
  return await web3.callView(
    ENS_REGISTRY,
    "function owner(bytes32 node) external view returns (address)",
    [namehash(domain)],
  );
}
