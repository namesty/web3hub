/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, useThemeUI } from 'theme-ui'
import { useStateValue } from '../state/state'

import addrShortener from '../utils/addrShortener'
import Link from 'next/link'
import { useRouter } from 'next/router'
import User from '../../public/images/user.svg'
import MyAPIs from '../../public/images/myapis.svg'
import onboardInit from '../utils/onboardInit'

type SignInAreaProps = {
  onDark?: boolean
}

const SignInArea = ({ onDark }: SignInAreaProps) => {
  const [{ dapp }, dispatch] = useStateValue()
  const { theme } = useThemeUI()
  const router = useRouter()
  const onboard:any = onboardInit(dispatch)
  
  const handleSignInClick = async () => {
    let selected = await onboard.walletSelect()
    if (selected) {
      await onboard.walletCheck()
    }
  }
  return (
    <Flex
      className="sign-in-wrap"
      sx={{
        ul: { display: 'flex', color: onDark ? 'white !important' : '' },
        li: { ml: 2 },
      }}
    >
      <ul sx={{ display: 'flex', alignItems: 'center' }}>
        {dapp.balance < 0 ? (
          <li
            onClick={handleSignInClick}
            onKeyUp={handleSignInClick}
            sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <User stroke={onDark ? 'white' : theme.colors.w3darkGreen} />
            <span>&nbsp;</span>
            <span
              sx={{
                color: onDark ? 'white' : 'w3darkGreen',
                fontFamily: 'Montserrat',
                fontSize: '0.875rem',
                fontWeight: '600',
                lineHeight: '1.0625rem',
                letterSpacing: '-0.025rem',
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
                    <MyAPIs
                      stroke={onDark ? 'white' : theme.colors.w3green}
                      sx={{ mr: 2 }}
                    />
                    <span
                      sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '0.875rem',
                        color: onDark ? 'white !important' : 'w3green',
                        fontWeight: '600',
                        lineHeight: '1.0625rem',
                        letterSpacing: '-0.025rem',
                        textAlign: 'left',
                      }}
                    >
                      My APIs
                    </span>
                  </a>
                </Link>
              )}
            </li>
            <li
              className="wallet-addr"
              sx={{ p: '0.425rem', display: 'flex', alignItems: 'center' }}
            >
              <User stroke={onDark ? 'white' : theme.colors.w3darkGreen} />
              <span
                className="header-nav"
                sx={{
                  ml: 2,
                  textTransform: 'initial',
                  fontFamily: 'Montserrat',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  lineHeight: '1.0625rem',
                  letterSpacing: '-0.025rem',
                  color: onDark ? 'white' : 'w3darkGreen',
                  cursor: 'default'
                }}
              >
                {dapp.address && addrShortener(dapp.address)}
              </span>
            </li>
          </React.Fragment>
        )}
        <li>
          <Button
            variant={
              router.pathname !== '/apis/create' ? 'primaryMedium' : 'secondaryMedium'
            }
            onClick={() => {
              router.pathname !== '/apis/create'
                ? router.push('/apis/create?activeTab=create')
                : router.push('/')
            }}
            sx={{ display: 'inline-block', ml: 3 }}
          >
            {router.pathname !== '/apis/create' ? 'Create New API' : 'Cancel'}
          </Button>
        </li>
      </ul>
    </Flex>
  )
}

export default SignInArea
