import InitialState from '../state/initialState'

type newState = {
  address: string
  network: number
  balance: number
  wallet: { name: string; }
  web3?: any 
  apis: any[]
}

function dappReducer(state = {}, action) {
  console.log('dappReducer', state, action)
  let newStateObj: newState = InitialState.dapp
  switch (action.type) {
    case 'SET_ADDRESS':
      newStateObj.address = action.payload
      return { ...state, ...newStateObj }
    case 'SET_NETWORK':
      newStateObj.network = action.payload
      return { ...state, ...newStateObj }
    case 'SET_BALANCE':
      newStateObj.balance = action.payload
      return { ...state, ...newStateObj }
    case 'SET_WALLET':
      newStateObj.wallet = action.payload
      return { ...state, ...newStateObj }
    case 'SET_WEB3':
      newStateObj.web3 = action.payload
      return { ...state, ...newStateObj }
    case 'SET_AVAILABLE_APIS':
      newStateObj.apis = action.payload
      return { ...state, ...newStateObj }
    default:
      return state
  }
}

export default function mainReducer({ dapp }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  return {
    dapp: dappReducer(dapp, action),
  }
}