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
        {dapp.balance >= 0 && (
          <React.Fragment>
            {/* <li>
              <Link href="/">
                <a>All APIs</a>
              </Link>
            </li> */}
            <li>
              <Link href="/apis/user">
                <a>My APIs</a>
              </Link>
            </li>
            <li>
              <Button onClick={handleNewAPIClick} sx={{ display: 'inline-block' }}>
                New API
              </Button>
            </li>
          </React.Fragment>
        )}
        <li>
          {dapp.balance < 0 ? (
            <Button onClick={handleSignInClick} onKeyUp={handleSignInClick}>
              Sign In
            </Button>
          ) : (
            <Box className="wallet-addr" sx={{border: '1px solid black', borderRadius: 4, p: '.425rem'}}>
              {dapp.address && addrShortener(dapp.address)}
            </Box>
          )}
        </li>
      </ul>
    </Flex>
  )
}

export default SignInArea
