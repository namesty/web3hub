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
import User from '../../public/images/user.svg'
import MyAPIs from '../../public/images/myapis.svg'

// import Ceramic from '@ceramicnetwork/http-client'
// import { IDX } from '@ceramicstudio/idx'
// import ethAddressToDID from '../utils/ethAddressToDID'
// const ceramic = new Ceramic('https://gateway-clay.ceramic.network')
// const idx = new IDX({ ceramic })

type SignInAreaProps = {
  onDark?: boolean
}

const SignInArea = ({ onDark }: SignInAreaProps) => {
  const [{ dapp }, dispatch] = useStateValue()
  const router = useRouter()
  const onboard = getOnboard({
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
  console.log('onDark:',onDark)
  return (
    <Flex
      className="sign-in-wrap"
      sx={{
        '*': { display: 'flex', color: onDark ? 'white !important' : '' },
        li: { ml: 2 },
      }}
    >
      <ul sx={{ display: 'flex', alignItems: 'center' }}>
        {dapp.balance < 0 ? (
          <li
            onClick={handleSignInClick}
            onKeyUp={handleSignInClick}
            sx={{ cursor: 'pointer', alignItems: 'center' }}
          >
            <User stroke={onDark ? 'white' : 'darkGreen'} />
            <span>&nbsp;</span>
            <span
              sx={{
                color: '#0D373C',
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '17px',
                letterSpacing: '-0.4000000059604645px',
              }}
            >
              Sign in
            </span>
          </li>
        ) : (
          <React.Fragment>
            <li>
              {router.pathname === '/apis/create' ? (
                ''
              ) : (
                <Link href="/apis/user?activeTab=published">
                  <a
                    className="header-nav"
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <MyAPIs stroke={onDark ? 'white' : 'darkGreen'} sx={{mr: 2}}/>
                    <span
                      sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '17px',
                        letterSpacing: '-0.4000000059604645px',
                        textAlign: 'left',
                      }}
                    >
                      My APIs
                    </span>
                  </a>
                </Link>
              )}
            </li>
            <li className="wallet-addr" sx={{ p: '.425rem' }}>
              <span
                className="header-nav"
                sx={{
                  textTransform: 'initial',
                  fontFamily: 'Montserrat',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '17px',
                  letterSpacing: '-0.4000000059604645px',
                }}
              >
                {dapp.address && addrShortener(dapp.address)}
              </span>
            </li>
          </React.Fragment>
        )}
        <li>
          <Button
            variant={router.pathname !== '/apis/create' ? 'primary' : 'secondaryOnLight'}
            onClick={() => {
              router.pathname !== '/apis/create'
                ? router.push('/apis/create?activeTab=create')
                : router.push('/')
            }}
            sx={{ display: 'inline-block', ml: 3 }}
          >
            <span>{router.pathname !== '/apis/create' ? 'Create API' : 'Cancel'}</span>
          </Button>
        </li>
      </ul>
    </Flex>
  )
}

export default SignInArea
