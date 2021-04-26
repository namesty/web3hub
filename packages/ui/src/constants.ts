export const cloudFlareGateway = 'https://cloudflare-ipfs.com/ipfs/'
export const networkID = 3
export const ENS_REGISTRY = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
export const MAIN_DOMAIN = "open.web3api.eth"
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"
export const FIFS_REGISTRAR = "0x99BeF0ec344a354303Bc5F3BB2E7e0a104B1E9f2"
export const INFURA_URI = "https://ropsten.infura.io/v3/b76cba91dc954ceebff27244923224b1"

export const sampleAPI = {
  name: 'SimpleStorage (ETH)',
  subtext: 'SimpleStorage Web3API Using Ethereum',
  description: 'Ad esse dolor id fugiat dolore irure ex dolor aute exercitation deserunt. Ipsum incididunt reprehenderit in laboris eiusmod in ad. Duis mollit deserunt sint magna cillum aliquip est esse quis minim id aliqua deserunt. Qui in exercitation sit ullamco non quis amet est ad tempor occaecat ipsum eiusmod mollit. Do cupidatat commodo duis in. Esse quis laborum excepteur fugiat irure sit magna exercitation ad occaecat deserunt.',
  icon: './meta/imgs/web3api.svg',
  banner: './meta/imgs/web3api-banner.svg',
  links: [
    {
      name: 'github',
      icon: './meta/imgs/github.svg',
      url: 'https://github.com/Web3-API/demos/tree/main/simple-storage/web3api',
    },
    {
      name: 'website',
      icon: './meta/imgs/web3api.svg',
      url: 'https://web3api.dev',
    },
  ],
  queries: [
    {
      name: 'Deploy Storage Contract',
      description: 'Deploy the SimpleStorage contract onto Ethereum.',
      query: './meta/queries/deploy.graphql',
    },
    {
      name: 'Get Storage Value',
      description:
        'Get the storage value within an existing SimpleStorage contract on Ethereum.',
      query: './meta/queries/get.graphql',
    },
    {
      name: 'Set Storage Value',
      description:
        'Set the storage value within an existing SimpleStorage contract on Ethereum.',
      query: './meta/queries/set.graphql',
    },
  ],
}