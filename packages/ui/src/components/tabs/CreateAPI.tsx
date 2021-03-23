/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Select, Styled, Flex, Button } from 'theme-ui'
import Outbound from '../../public/images/outbound.svg'

const CreateAPI = () => {
  return (
    <Flex className="create">
      <form
        sx={{
          '* > div': {
            width: '13.75rem',
            mr: '2.75rem',
            color: 'text',
            fontFamily: 'Montserrat',
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
            letterSpacing: '-0.025rem',
            '+ *': { width: '30.25rem', mb: '3.375rem' },
          },
        }}
      >
        <Flex>
          <div>
            <label>Hosting Configuration</label>
          </div>
          <Select>
            <option>IPFS + ENS</option>
            <option>Another</option>
            <option>And Another</option>
          </Select>
        </Flex>
        <Flex>
          <div>
            <label sx={{ mb: 2 }}>
              Clone the starter repo to your local dev environment
            </label>
            <a
              href="https://github.com/Web3Api/boilerplate"
              target="_BLANK"
              sx={{
                display: 'flex',
                width: '9.375rem',
                alignItems: 'center',
                border: '0.125rem solid',
                borderColor: 'w3green',
                filter: 'drop-shadow(0rem 0.9375rem 1.875rem rgba(20, 102, 204, 0.16))',
                borderRadius: '0.25rem',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '0.75rem',
                lineHeight: '0.875rem',
                textAlign: 'center',
                letterSpacing: '-0.0375rem',
                textTransform: 'uppercase',
                color: 'w3green',
                textDecoration: 'none',
                p: 3,
                '&:after': {
                  display: 'inline-block',
                  ml: 2,
                  content: "''",
                  width: '1rem',
                  height: '1rem',
                  background: 'url(/images/outbound.svg) no-repeat',
                },
              }}
            >
              starter repo
            </a>
          </div>
          <Styled.code>
            <Styled.pre>
              {`git clone https://github.com/web3api-start/uniswapv2 
cd uniswapv2
yarn install`}
            </Styled.pre>
          </Styled.code>
        </Flex>
        <Flex>
          <div>
            <label>When ready deploy the package to IPFS using the following</label>
          </div>
          <Styled.code>
            <Styled.pre>{`yarn codegen
yarn build
yarn deploy --IPFS`}</Styled.pre>
          </Styled.code>
        </Flex>
      </form>
      <div>
        <div
          sx={{
            px: 2,
            backgroundColor: 'w3darkGreen',
            p: '2.875rem',
            boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            width: '300px',
            height: '300px',
            '&:after': {
              display: 'block',
              content: "''",
              position: 'absolute',
              left: '-5%',
              top: '18%',
              width: '12.5rem',
              height: '18.75rem',
              background: 'url(/images/doc.svg) left center no-repeat transparent',
              backgroundSize: '100%',
              opacity: 0.2,
              zIndex: '0'
            },
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              '*': { textAlign: 'center' },
            }}
          >
            <Styled.h2 sx={{ color: 'white', fontWeight: 'bold', mb: 2, mt: 0 }}>Need help?</Styled.h2>
            <Styled.p sx={{ mb: 4, color: 'white' }}>
              First time developing with Web3API? View the getting started tutorial
              here.
            </Styled.p>
            <Button variant="primaryWithGradient">Getting Started</Button>
          </Flex>
        </div>
      </div>
    </Flex>
  )
}

export default CreateAPI
