import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'
import Ceramic from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'
import { DID } from 'dids'
import KeyDidResolver from 'key-did-resolver'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { createEthereumProvider } from './ethereum'
import getOnboard from './Onboarding'

const onboardInit = (dispatch) => {
  return getOnboard({
    address: async (address) => {
      dispatch({
        type: 'SET_ADDRESS',
        payload: address,
      })
    },
    network: (network) => {
      dispatch({
        type: 'SET_NETWORK',
        payload: network,
      })
    },
    balance: (balance) => {
      dispatch({
        type: 'SET_BALANCE',
        payload: balance,
      })
    },
    wallet: async (wallet) => {
      let web3 = wallet.provider && createEthereumProvider(wallet.provider)
      dispatch({
        type: 'SET_WALLET',
        payload: wallet,
      })
      dispatch({
        type: 'SET_WEB3',
        payload: web3,
      })
      const ceramic = new Ceramic('https://ceramic-clay.3boxlabs.com')
      const resolver = {
        ...KeyDidResolver.getResolver(),
        ...ThreeIdResolver.getResolver(ceramic),
      }
      // const did = new DID({ resolver })
      // ceramic.setDID(did)

      console.log({ wallet })
      const threeIdConnect = new ThreeIdConnect()
      console.log({ threeIdConnect })
      const authProvider = new EthereumAuthProvider(
        wallet.provider,
        wallet.provider.selectedAddress,
      )
      console.log({ authProvider })
      await threeIdConnect.connect(authProvider)
      const provider = await threeIdConnect.getDidProvider()

      console.log({ provider })
      console.log({ ceramic })
      await ceramic.did.setProvider(provider)

      console.log({ ceramic })

      const idx = new IDX({ ceramic })
      console.log({ idx })
      // dispatch({
      //   type: 'SET_IDX',
      //   payload: idx,
      // })
      // await ceramic.did.authenticate()
      const t = await idx.set('basicProfile', {
        name: 'FUNCIONA BRO',
      })
    },
  })
}

export default onboardInit
