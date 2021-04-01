import { namehash } from "ethers/lib/utils"
import { useCallback, useState } from "react"
import contentHash from 'content-hash'
import { ENS_REGISTRY, MAIN_DOMAIN } from "../../constants"
import { useStateValue } from "../../state/state"
import { Ethereum } from "../../utils/ethereum"
import { utf8ToKeccak256 } from "../../utils/hash"

export const MAIN_DOMAIN_NAMEHASH = namehash(MAIN_DOMAIN)

export const useCreateSubdomain = () => {
  const [{ dapp }] = useStateValue()
  const [error, setError] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(0)
  
  const execute = useCallback(async (subdomain: string, ipfs: string) => {
    setIsLoading(true);
    
    const domain = `${subdomain}.${MAIN_DOMAIN}`
    const domainNode = namehash(domain)

    try {
      if(!dapp.web3 || Object.keys(dapp.web3).length === 0) {
        throw new Error("No web3 provider set")
      }

      const web3: Ethereum = dapp.web3;
      const signerAddress = await web3.getSigner().getAddress()
      const publicResolverAddress = await web3.getSigner().resolveName("resolver.eth")

      setStatus(0)

      await web3.sendTransaction(
        ENS_REGISTRY,
        "function setSubnodeOwner(bytes32 node, bytes32 label, address owner) external",
        [MAIN_DOMAIN_NAMEHASH, utf8ToKeccak256(subdomain), signerAddress]
      )

      setStatus(1)

      await web3.sendTransaction(
        ENS_REGISTRY,
        "function setResolver(bytes32 node, address owner)",
        [domainNode, publicResolverAddress],
        
      )

      setStatus(2)

      await web3.sendTransaction(
        publicResolverAddress,
        "function setContenthash(bytes32 node, bytes hash)",
        [domainNode, "0x" + contentHash.fromIpfs(ipfs), {
          gasLimit: 5000000
        }]
      )

      setStatus(3)
    } catch(e) {
      setError(e)
    }

    setIsLoading(false)
  }, [dapp.web3])

  return [execute, { error, isLoading, status }] as const
}