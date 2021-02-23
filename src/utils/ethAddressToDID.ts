import Ceramic from '@ceramicnetwork/http-client'
const ceramic = new Ceramic('https://gateway-clay.ceramic.network')

export default async function ethAddressToDID (address: string): Promise<string> {
  const caip10Doc = await ceramic?.createDocument('caip10-link', {
    metadata: {
      family: 'caip10-link',
      controllers: [address.toLowerCase() + '@eip155:1']
    }
  })
  return caip10Doc?.content
}