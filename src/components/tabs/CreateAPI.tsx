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
            width: '220px',
            mr: '44px',
            color: '#688184',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '22px',
            letterSpacing: '-0.4000000059604645px',
            '+ *': { width: '484px', mb: '54px' },
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
            <label sx={{mb: 2}}>Clone the starter repo to your local dev environment</label>
            <a
              href="https://github.com/Web3Api/boilerplate"
              target="_BLANK"
              sx={{
                display: 'flex',
                width: '150px',
                alignItems: 'center',
                border: '2px solid #509DAC',
                filter: 'drop-shadow(0px 15px 30px rgba(20, 102, 204, 0.16))',
                borderRadius: '4px',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '12px',
                lineHeight: '14px',
                textAlign: 'center',
                letterSpacing: '-0.6px',
                textTransform: 'uppercase',
                color: '#509DAC',
                textDecoration: 'none',
                p: 3,
                '&:after': {
                  display: 'inline-block',
                  ml: 2,
                  content: "''",
                  width: '1rem',
                  height: '1rem',
                  background: 'url(/images/outbound.svg) no-repeat'
                }
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
            px: 4,
            backgroundColor: '#0D373C',
            p: '46px',
            boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
            overflow: 'hidden',
            '&:after': {
              display: 'block',
              content: "''",
              position: 'absolute',
              left: '-5%',
              top: '18%',
              width: '200px',
              height: '300px',
              background: 'url(/images/doc.svg) left center no-repeat transparent',
              backgroundSize: '100%',
              opacity: .2
            }
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              '*': { textAlign: 'center' },
            }}
          >
            <Styled.h1 sx={{ color: 'white' }}>Need help?</Styled.h1>
            <Styled.p sx={{ mb: 4, color: 'white' }}>
              First time developing with Web3API? <br /> View the getting started tutorial
              here.
            </Styled.p>
            <Button variant="callout">Getting Started</Button>
          </Flex>
        </div>
      </div>
    </Flex>
  )
}

export default CreateAPI
