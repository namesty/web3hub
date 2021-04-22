import { createEthereumProvider } from './../utils/ethereum';
import {INFURA_URI, networkID} from '../constants'

let initialState = {
  dapp: {
    balance: -1,
    address: undefined,
    wallet: {
      name: 'TEST',
    },
    network: networkID,
    web3: undefined,
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