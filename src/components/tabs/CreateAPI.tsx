/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Select, Styled, Flex, Button } from 'theme-ui'

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
            <label>
              Clone the{' '}
              <a href="https://github.com/Web3Api/boilerplate" target="_BLANK">
                starter repo
              </a>{' '}
              to your local dev environment
            </label>
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
      <div sx={{}}>
        <div
          sx={{
            px: 4,
            backgroundColor: '#0D373C',
            p: '46px',
            boxShadow: '0px 25px 40px rgba(0, 0, 0, 0.06)',
            borderRadius: '8px',
          }}
        >
          <div sx={{ '*': { textAlign: 'center' } }}>
            <Styled.h1 sx={{ color: 'white' }}>Need help?</Styled.h1>
            <Styled.p sx={{ mb: 4, color: 'white' }}>
              First time developing with Web3API? View the getting started tutorial here
            </Styled.p>
            <Button variant="callout">Getting Started</Button>
          </div>
        </div>
      </div>
    </Flex>
  )
}

export default CreateAPI
