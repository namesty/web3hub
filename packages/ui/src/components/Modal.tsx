/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, Styled } from 'theme-ui'
import Image from 'next/image'
import Close from '../../public/images/close.svg'
import onboardInit from '../utils/onboardInit'
import { useStateValue } from '../state/state'

type ModalProps = {
  screen: string
  noLeftShift?: boolean
  close: () => void
}

const Modal = ({ screen = 'connect', close, noLeftShift }: ModalProps) => {
  const [{ dapp }, dispatch] = useStateValue()
  const onboard: any = onboardInit(dispatch)

  const handleWeb3SignInClick = async () => {
    let selected = await onboard.walletSelect()
    if (selected) {
      await onboard.walletCheck()
      close()
    }
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
              src="/images/ethereum-logo.svg"
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
              Registering an ENS requires an Ethereum wallet to continue.
            </Styled.h4>
            <Button variant="calloutLarge" onClick={handleWeb3SignInClick}>
              Connect
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
            <Styled.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Sign In
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
              Please select a sign in option to continue.
            </Styled.h4>
            <Flex
              sx={{
                justifyContent: 'space-between',
                gap: 4,
                '> *': {
                  bg: '#07292D',
                  p: '4',
                  boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.06)',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                button: {
                  mt: 4,
                  px: 2,
                  width: '200px',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                '.selection': {
                  flexDirection: 'column',
                },
              }}
            >
              <Flex className="github selection">
                <Image
                  src="/images/github-icon-large.svg"
                  alt="github"
                  width={79}
                  height={79}
                />
                <Button variant="calloutLarge">Sign In With Github</Button>
              </Flex>

              <Flex className="ethaddr selection">
                <Image
                  src="/images/ethereum-logo.svg"
                  alt="github"
                  width={79}
                  height={79}
                />
                <Button variant="calloutLarge" onClick={handleWeb3SignInClick}>
                  Sign In With Wallet
                </Button>
              </Flex>
            </Flex>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  )
}

export default Modal
