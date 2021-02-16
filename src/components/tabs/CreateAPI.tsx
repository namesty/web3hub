/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const CreateAPI = () => {
  return (
    <div className="create">
      <h4>Create a Web3API Package</h4>
      <p>Start a new Web3API for your selected hosting configuration</p>
      <form>
        <fieldset>
          <label>Hosting Configuration</label>
          <select>
            <option>IPFS + ENS</option>
            <option>Another</option>
            <option>And Another</option>
          </select>
        </fieldset>
        <fieldset>
          <label>
            Clone the <a href="#">starter repo</a> to your local dev environment
          </label>
          <code>
            <pre>
              git clone https://github.com/web3api-start/uniswapv2 
              cd uniswapv2
              yarn install
            </pre>
          </code>
        </fieldset>
        <fieldset>
          <div className="callout-text">
            First time developing with Web3API? View the getting started tutorial <a href="#">here</a>
          </div>
        </fieldset>
        <fieldset>
          <label>When ready deploy the package to IPFS using the following</label>
          <code>
            <pre>
              yarn codegen
              yarn build
              yarn deploy --IPFS
            </pre>
          </code>
        </fieldset>
      </form>
    </div>
  )
}

export default CreateAPI
