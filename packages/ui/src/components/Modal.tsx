/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Flex, Button, Styled } from 'theme-ui'
import Close from '../../public/images/close.svg'

type ModalProps = {
  screen: string
  close: () => void
}

const Modal = ({ screen = 'success', close }: ModalProps) => {
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
          minWidth: '39.375rem',
          height: '35.625rem',
          top: '0rem',
          left: '-7rem',
          backgroundColor: 'w3darkGreen',
          boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
          borderRadius: '0.5rem',
          pt: '2.1875rem',
          pb: '4.375rem',
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
              Sucess!
            </Styled.h1>
            <Styled.h4 sx={{ color: 'white', fontSize: '1.25rem', pb: 3 }}>
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
