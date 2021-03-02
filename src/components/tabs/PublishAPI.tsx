/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Flex, Select, Button, Styled } from 'theme-ui'

const CreateAPI = () => {
  return (
    <div className="publish">
      <div className="storage">
        <Styled.h4>Storage</Styled.h4>
        <form>
          <Styled.h4>Location</Styled.h4>
          <p>Point Web3hub to where your package has been uploaded.</p>
          <div>
            <fieldset>
              <div><label>Package location</label></div>
              <Input
                type="text"
                placeholder="IPFS://fifmdoij9dfsjsd9fjwoefj09wej0f8rhwe98hrew98w09er"
              />
            </fieldset>
            <br/>
            <fieldset>
              <div className="title">Package Preview</div>
              <Flex className="preview">
                <img className="api-logo" src="api-logo.svg" sx={{bg: 'black', width: '211px', height: '211px', mr: 2}}/>
                <div className="api-info">
                  <div className="title"><b>Uniswap V2</b></div>
                  <div className="sub-title">
                    Easily swap between any two ERC-20 Tokens
                  </div>
                  <p className="description">
                    <small>Tempor pariatur laboris minim velit. Elit in voluptate excepteur do ipsum ad dolor. Id cillum et deserunt proident dolore nulla aliqua voluptate duis. Minim duis pariatur commodo cupidatat. Irure ad ullamco est et incididunt officia irure ad velit. Proident ipsum cupidatat reprehenderit dolor in tempor nulla.</small>
                  </p>
                  <a className="repo-link" href="https://www.github.com/GITHUBREPO" target="_BLANK">
                    Github Repo
                  </a>
                </div>
              </Flex>
            </fieldset>
          </div>
          <br/>
          <div>
            <Styled.h4>Enable persistence</Styled.h4>
            <p>Ensure your package remains available</p>
            <fieldset>
              <div><label>Pinning service provider</label></div>
              <Select>
                <option>Web3API.org pinning service</option>
                <option>Another</option>
                <option>And Another</option>
              </Select>
            </fieldset>
          </div>
        </form>
      </div>
      <br/><br/>
      <div className="routing">
        <Styled.h4>Routing</Styled.h4>
        <p>Register your package to an ENS domain and make it available on the Web3Hub</p>
        <form>
          <div><label>ENS Subdomain</label></div>
          <Input type="text" placeholder="uniswapv2.open.web3.eth" />
          <p>
            <small>This option will cost ~0.0023 ETH ($2.90 USD)</small>
            <br />
            <small>
              Need ETH? Purcahse with your bank or card <a href="https://www.moonpay.com/" target="_BLANK">here</a>
            </small>
          </p>
          <Button>Register ENS</Button>
          <ul>
            <li>
              <a href="https://etherscan.io/" target="_BLANK">View Transaction</a>
            </li>
            <li>
              <a href="https://etherscan.io/" target="_BLANK">View Transaction</a>
            </li>
            <li>
              <a href="https://etherscan.io/" target="_BLANK">View Transaction</a>
            </li>
          </ul>
          <br/>
          <div className="callout-text">
            Package now live on the Web3Hub! <a href="/apis/ENTITY">View API</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAPI
