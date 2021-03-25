/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Flex, Select, Button, Styled, Field } from 'theme-ui'
import Stars from '../Stars'
import Badge from '../Badge'
import Card from '../Card'
import { useState } from 'react'

const PublishAPI = () => {
  const [subdomain, setSubdomain] = useState('')
  return (
    <Flex className="publish">
      <form
        sx={{
          flex: 7,
          section: {
            mb: '4.375rem',
          },
          h4: {
            color: 'w3darkGreen',
            mb: 2,
          },
          fieldset: {
            left: '-1px',
          },
          p: {
            fontFamily: 'Istok Web',
            fontSize: '1rem',
            lineHeight: '1.5rem',
            color: 'text',
            my: 3,
            mb: 2,
          },
          label: {
            width: '13.75rem',
            mr: '2.75rem',
            color: 'text',
            fontFamily: 'Montserrat',
            fontSize: '0.875rem',
            lineHeight: '1.375rem',
            letterSpacing: '-0.025rem',
            '+ *': { width: '30.25rem' },
          },
          input: {
            color: 'black',
            p: 3,
            borderRadius: '8px',
            fontFamily: 'Roboto Mono',
            fontSize: '16px',
            lineHeight: '140.62%',
          },
          
        }}
      >
        <section>
          <Styled.h4 sx={{}}>Location</Styled.h4>
          <p>Point Web3hub to where your package has been uploaded.</p>
          <fieldset>
            <label>IPFS location</label>
            <Input
              type="text"
              placeholder="IPFS://fifmdoij9dfsjsd9fjwoefj09wej0f8rhwe98hrew98w09er"
            />
          </fieldset>
        </section>

        <section>
          <Styled.h4 sx={{}}>Pointer</Styled.h4>
          <p>
            Register your API to an ENS domain that developers will reference when
            integrating.
          </p>
          <fieldset>
            <label>ENS Subdomain</label>
            <Input type="text" placeholder="{SUBDOMAIN}.open.web3.eth" />
            
            <p sx={{ }}>
              <small>This option will cost ~0.0023 ETH ($2.90 USD)
              <br />
              Need ETH?{' '}
              <a href="https://www.moonpay.com/" target="_BLANK" sx={{color: '#509DAC', textDecoration: 'none'}}>
                 Purcahse with your bank or card here
              </a>
              </small>
            </p>
            <br />
            <Button variant='primaryMedium'>Register ENS</Button>
            
          </fieldset>
        </section>
        <section>
          <Styled.h4 sx={{}}>Publish to Web3Hub</Styled.h4>
          <p>
            Make your package discoverable on the Web3Hub. After publishing, the IPFS
            pacakge will be persistently pinned using Fleek. Learn more
          </p>
          <fieldset>
            
            
            <br />
            <Button variant='primaryMedium'>Publish</Button>
          </fieldset>
        </section>
      </form>
      <Flex
        className="preview"
        sx={{
          flex: 3,
          textAlign: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div className="title">Package Preview</div>
        <div className="wrapper" sx={{ maxWidth: '17.5rem' }}>
          <Card boxShadowOn noHover />
        </div>
      </Flex>
    </Flex>
  )
}

export default PublishAPI
