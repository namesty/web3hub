import axios from 'axios'
import yaml from 'js-yaml'

const cloudFlareGateway = 'https://cloudflare-ipfs.com/ipfs/'

export default async function getMetaDataFromPackageHash(hash: string) {
  let ipfsDataFromJSON = null
  let ipfsDataFromYAML = null
  let ipfsData = null

  try {
    ipfsDataFromJSON = await axios.get(
      cloudFlareGateway + hash + '/web3api.meta.json'
    )
    ipfsData = ipfsDataFromJSON.data
  } catch (error) {
    console.log(error)
  }
  try {
    ipfsDataFromYAML = await axios.get(
      cloudFlareGateway + hash + '/web3api.meta.yaml'
    )
    ipfsData = ipfsDataFromYAML.data
  } catch (error) {
    console.log(error)
  }

  if (ipfsDataFromJSON === null && ipfsDataFromYAML === null) {
    console.log('NO METADATA FOUND')
  } else {
    try {
      const doc = yaml.load(ipfsData)
      return doc
    } catch (e) {
      console.log(e)
    }
  }
}
