import {networkID} from '../constants'

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
export default initialState
