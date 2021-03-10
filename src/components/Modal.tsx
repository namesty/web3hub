/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Close from '../../public/images/close.svg'

type ModalProps = {
  screen: string
  close: () => void
}

const Modal = ({ screen = 'success', close }: ModalProps) => {
  const { theme } = useThemeUI()
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
          minWidth: '630px',
          height: '570px',
          top: '0px',
          left: '-112px',
          backgroundColor: '#0D373C',
          boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.06)',
          borderRadius: '8px',
          pt: '35px',
          pb: '70px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000000,
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
                fill: '#FFFFFF',
                cursor: 'pointer'
              }
            }}/>
            <img src="/images/trophy.svg" alt="trophy" sx={{ width: '220px' }} />
            <Styled.h1
              sx={{ color: 'white', fontSize: '44px', fontWeight: 'bold', pt: 4, mb: 2 }}
            >
              Sucess!
            </Styled.h1>
            <Styled.h4 sx={{ color: 'white', fontSize: '20px', pb: 3 }}>
              Package now live on the Web3Hub!
            </Styled.h4>
            <Button variant="callout">View API</Button>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  )
}

export default Modal
