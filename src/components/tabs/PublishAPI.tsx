/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const CreateAPI = () => {
  return (
    <div className="publish">
      <div className="storage">
        <h4>Storage</h4>
        <form>
          <h5>Location</h5>
          <p>Point Web3hub to where your package has been uploaded.</p>
          <div>
            <fieldset>
              <label>Package location</label>
              <input
                type="text"
                placeholder="IPFS://fifmdoij9dfsjsd9fjwoefj09wej0f8rhwe98hrew98w09er"
              />
            </fieldset>
            <fieldset>
              <div className="title">Package Preview</div>
              <div className="preview">
                <img className="api-logo" src="api-logo.svg" />
                <div className="api-info">
                  <div className="title">Uniswap V2</div>
                  <div className="sub-title">
                    Easily swap between any two ERC-20 Tokens
                  </div>
                  <div className="description">
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                  </div>
                  <a className="repo-link" href="github.com/fsnasnfan">
                    Github Repo
                  </a>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <h5>Enable persistence</h5>
            <p>Ensure your package remains available</p>
            <fieldset>
              <label>Pinning service provider</label>
              <select>
                <option>Web3API.org pinning service</option>
                <option>Another</option>
                <option>And Another</option>
              </select>
            </fieldset>
          </div>
        </form>
      </div>
      <div className="routing">
        <h4>Routing</h4>
        <p>Register your package to an ENS domain and make it available on the Web3Hub</p>
        <form>
          <label>ENS Subdomain</label>
          <input type="text" placeholder="uniswapv2.open.web3.eth" />
          <p>
            <small>This option will cost ~0.0023 ETH ($2.90 USD)</small>
            <br />
            <small>
              Need ETH? Purcahse with your bank or card <a href="#">here</a>
            </small>
          </p>
          <button>Register ENS</button>
          <ul>
            <li>
              <a href="#">View Transaction</a>
            </li>
            <li>
              <a href="#">View Transaction</a>
            </li>
            <li>
              <a href="#">View Transaction</a>
            </li>
          </ul>
          <div className="text-callout">
            Package now live on the Web3Hub! <a href="#">View API</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAPI
