/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Select, Styled } from 'theme-ui'

const CreateAPI = () => {
  return (
    <div className="create">
      <Styled.h4>Create a Web3API Package</Styled.h4>
      <p>Start a new Web3API for your selected hosting configuration</p>
      <form>
        <div>
          <div>
            <label>Hosting Configuration</label>
          </div>
          <Select>
            <option>IPFS + ENS</option>
            <option>Another</option>
            <option>And Another</option>
          </Select>
        </div>
        <br/>
        <div>
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
              git clone https://github.com/web3api-start/uniswapv2 cd uniswapv2 yarn
              install
            </Styled.pre>
          </Styled.code>
        </div>
        <br/>
        <div>
          <div className="callout-text">
            First time developing with Web3API? View the getting started tutorial{' '}
            <a href="https://web3api.dev/" target="_BLANK">
              here
            </a>
          </div>
        </div>
        <br/>
        <div>
          <div>
            <label>When ready deploy the package to IPFS using the following</label>
          </div>
          <Styled.code>
            <Styled.pre>yarn codegen yarn build yarn deploy --IPFS</Styled.pre>
          </Styled.code>
        </div>
      </form>
    </div>
  )
}

export default CreateAPI
