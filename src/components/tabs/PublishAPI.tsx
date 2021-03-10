/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Flex, Select, Button, Styled, Field} from 'theme-ui'
import Stars from '../Stars'
import Badge from '../Badge'

const PublishAPI = () => {
  return (
    <Flex className="publish">
      <form
        sx={{
          flex: 7,
          section: {
            mb: '54px',
          },
          fieldset: {
            display: 'flex',
            alignItems: 'center',
            p: {
              fontFamily: 'Istok Web',
              fontSize: '16px',
              lineHeight: '24px',
              color: '#688184',
            },
          },
          label: {
            width: '220px',
            mr: '44px',
            color: '#688184',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            lineHeight: '22px',
            letterSpacing: '-0.4000000059604645px',
            '+ *': { width: '484px' },
          },
        }}
      >
        <section>
          <Styled.h4>Location</Styled.h4>
          <p>Point Web3hub to where your package has been uploaded.</p>
          <fieldset>
            <label>Package location</label>
            <Input
              type="text"
              placeholder="IPFS://fifmdoij9dfsjsd9fjwoefj09wej0f8rhwe98hrew98w09er"
            />
          </fieldset>
        </section>

        <section>
          <Styled.h4>Enable persistence</Styled.h4>
          <p>Ensure your package remains available</p>
          <fieldset>
            <label>Pinning service provider</label>
            <Select>
              <option>Web3API.org pinning service</option>
              <option>Another</option>
              <option>And Another</option>
            </Select>
          </fieldset>
        </section>
        <section>
          <Styled.h4>Where do you want to store your API</Styled.h4>
          <p>
            Register your package to an ENS domain and make it available on the Web3Hub.
          </p>
          <fieldset>
            <label>ENS Subdomain</label>
            <Field label="" name="ens" defaultValue="uniswapv2.open.web3.eth" />
          </fieldset>
        </section>
        <section>
          <fieldset>
            <label />
            <Flex>   
              <Button>Register ENS</Button>
              <p sx={{ m: 0, ml: 3 }}>
                <small>This option will cost ~0.0023 ETH ($2.90 USD)</small>
                <br />
                <small>
                  Need ETH? Purcahse with your bank or card{' '}
                  <a href="https://www.moonpay.com/" target="_BLANK">
                    here
                  </a>
                </small>
              </p>
            </Flex>
          </fieldset>
        </section>
      </form>
      <Flex className="preview" sx={{flex: 3, textAlign: 'center', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
        <div className="title">Package Preview</div>
        <Flex className="preview-content" sx={{
          maxWidth: '282px',
          boxShadow: '0px 32px 44px rgba(28, 94, 93, 0.1)',
          borderRadius: '8px',
          p: '24px',
          flexDirection: 'column',
          justifyContent: 'space-between',
                   alignItems: 'center',
                   textAlign: 'center'
        }}>
          <img
            className="api-logo"
            src="api-logo.svg"
            sx={{ bg: 'black', width: '211px', height: '211px', mr: 2 }}
          />
          <Flex className="api-info" sx={{ flexDirection: 'column', alignItems: 'center'}}>
            <div className="title">
              <b>Uniswap V2</b>
            </div>
            <div className="sub-title">Easily swap between any two ERC-20 Tokens</div>
            <Stars count={320}/>
            <Badge label="IPFS"/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PublishAPI
