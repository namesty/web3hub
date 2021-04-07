/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, Styled } from 'theme-ui'
import Image from 'next/image'
import Close from '../../public/images/close.svg'
import onboardInit from '../utils/onboardInit'
import { useStateValue } from '../state/state'
import axios from 'axios'
import { useRouter } from 'next/router'

type ModalProps = {
  screen: string
  noLeftShift?: boolean
  close: () => void
}

const Modal = ({ screen = 'connect', close, noLeftShift }: ModalProps) => {
  const [{ dapp }, dispatch] = useStateValue()
  const { pathname } = useRouter()
  const onboard: any = onboardInit(dispatch)

  const handleConnect = async () => {
    let selected = await onboard.walletSelect()
    if (selected) {
      await onboard.walletCheck()
      close()
    }
  }

  const handleDisconnect = async () => {
    onboard.walletReset()
    close()
  }

  const handleSignIn = async () => {
    // if(dapp.address !== undefined){
    let res = await axios.post('http://localhost:3001/auth/sign-in')
    console.log({ res })
    // }

    // alert('implement sign in')
  }

  const handleSignOut = async () => {
    alert('implement sign out')
  }

  return (
    <Flex
      className="overlay"
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 10000,
        background: 'rgba(0,0,0,.4)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        sx={{
          width: '39.375rem',
          height: '35.625rem',
          top: '0rem',
          left: noLeftShift ? '0rem' : '-7rem',
          backgroundColor: 'w3darkGreen',
          boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
          borderRadius: '0.5rem',
          pt: '2.1875rem',
          pb: '4.375rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000000,
          px: 5,
        }}
      >
        {screen === 'connect' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image
              src="/images/eth-logo-hollow-large.svg"
              alt="github"
              width={140}
              height={140}
            />
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Connect wallet
            </Styled.h1>
            <Styled.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontFamily: 'Istok Web',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '160%',
                textAlign: 'center',
              }}
            >
              Please connect an ethereum wallet to continue.
            </Styled.h4>
            <Button variant="calloutLarge" onClick={handleConnect}>
              Connect
            </Button>
          </React.Fragment>
        )}
        {screen === 'disconnect' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image
              src="/images/eth-logo-hollow-large.svg"
              alt="github"
              width={140}
              height={140}
            />
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Wallet Connected
            </Styled.h1>
            <Styled.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontFamily: 'Istok Web',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '160%',
                textAlign: 'center',
              }}
            >
              Address: {dapp.address}
            </Styled.h4>
            <Button variant="calloutLarge" onClick={handleDisconnect}>
              Disconnect
            </Button>
          </React.Fragment>
        )}
        {screen === 'signin' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image
              src="/images/github-icon-large.svg"
              alt="github"
              width={140}
              height={140}
            />
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Sign in
            </Styled.h1>
            <Styled.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontFamily: 'Istok Web',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '160%',
                textAlign: 'center',
              }}
            >
              Please sign in with GitHub to continue.
            </Styled.h4>
            <a href={`http://localhost:3001/auth/sign-in?redirectUrl=${pathname}`}>
              <Button variant="calloutLarge">Sign in with github</Button>
            </a>
          </React.Fragment>
        )}
        {screen === 'signout' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image src="/images/signout.svg" alt="github" width={140} height={140} />
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Sign out
            </Styled.h1>
            <Styled.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontFamily: 'Istok Web',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '160%',
                textAlign: 'center',
              }}
            >
              Would you like to sign out of [username]?
            </Styled.h4>
            <Button variant="calloutLarge" onClick={handleSignOut}>
              Sign Out
            </Button>
          </React.Fragment>
        )}
        {screen === 'success' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <img src="/images/trophy.svg" alt="trophy" sx={{ width: '13.75rem' }} />
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Success!
            </Styled.h1>
            <Styled.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontFamily: 'Istok Web',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '20px',
                lineHeight: '160%',
                textAlign: 'center',
              }}
            >
              Package now live on the Web3Hub!
            </Styled.h4>
            <Button variant="calloutLarge">View API</Button>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  )
}

export default Modal
