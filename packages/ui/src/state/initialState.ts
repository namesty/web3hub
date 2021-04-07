let initialState = {
  dapp: {
    balance: -1,
    address: undefined,
    wallet: {
      name: 'TEST',
    },
    network: 3,
    web3: {},
    apis: [],
  },
}

type dappType = {
  balance: number
  address: string
  wallet: { name: string }
  network: number
  web3?: any
  apis: any[]
  github?: string
}

export default initialState
export type { dappType }