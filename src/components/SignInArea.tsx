/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, Box } from 'theme-ui'
import { useStateValue } from '../state/state'
import getOnboard from '../utils/Onboarding'
import addrShortener from '../utils/addrShortener'
import Link from 'next/link'
import Web3 from 'web3'
import { useRouter } from 'next/router'

// import Ceramic from '@ceramicnetwork/http-client'
// import { IDX } from '@ceramicstudio/idx'
// import ethAddressToDID from '../utils/ethAddressToDID'
// const ceramic = new Ceramic('https://gateway-clay.ceramic.network')
// const idx = new IDX({ ceramic })

const SignInArea = () => {
  const [{ dapp }, dispatch] = useStateValue()
  const router = useRouter()
  const handleNewAPIClick = () => {
    router.push('/apis/create?activeTab=create')
  }
  const onboard = getOnboard({
    address: async (address) => {
      dispatch({
        type: 'SET_ADDRESS',
        payload: address,
      })
      // let IDXDATA = await idx.get('basicProfile', await ethAddressToDID(address))
      // console.log(IDXDATA)
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
    wallet: (wallet) => {
      let web3 = new Web3(wallet.provider)
      dispatch({
        type: 'SET_WALLET',
        payload: wallet,
      })
      dispatch({
        type: 'SET_WEB3',
        payload: web3,
      })
    },
  })

  const handleSignInClick = async () => {
    let selected = await onboard.walletSelect()
    if (selected) {
      await onboard.walletCheck()
    }
  }

  return (
    <Flex className="sign-in-wrap" sx={{ li: { ml: 2 } }}>
      <ul sx={{ display: 'flex', alignItems: 'center' }}>
        {dapp.balance < 0 ? (
          <li
            onClick={handleSignInClick}
            onKeyUp={handleSignInClick}
            sx={{ cursor: 'pointer', alignItems: 'center' }}
          >
            <img src="/images/user.svg" alt="user" sx={{ height: '17px' }} />
            <span>&nbsp;</span>
            <span className="text-nav" sx={{ color: 'white' }}>
              Sign in
            </span>
          </li>
        ) : (
          <React.Fragment>
            <li>
              <Link href="/apis/user">
                <a className="text-nav" sx={{ '&:hover': { color: 'w3MoreTeal'}}}>My APIs</a>
              </Link>
            </li>
            <li className="wallet-addr" sx={{ p: '.425rem' }}>
              <span className="text-nav" sx={{ color: 'white', fontSize: '1rem', textTransform: 'initial' }}>
                {dapp.address && addrShortener(dapp.address)}
              </span>
            </li>
          </React.Fragment>
        )}
        <li>
          <Button
            onClick={dapp.balance < 0 ? handleSignInClick : handleNewAPIClick}
            sx={{ display: 'inline-block', ml: 3 }}
          >
            <span>Create API</span>
          </Button>
        </li>
      </ul>
    </Flex>
  )
}

export default SignInArea
