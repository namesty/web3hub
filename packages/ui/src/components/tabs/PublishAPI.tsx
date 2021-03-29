/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react'
import { jsx, Input, Flex, Select, Button, Styled, Field } from 'theme-ui'
import { useStateValue } from '../../state/state'
import Card from '../Card'
import Modal from '../Modal'

const PublishAPI = () => {
  const [{ dapp }, dispatch] = useStateValue()
  const [subdomain, setSubdomain] = useState('')
  const [showENSModal, setShowENSModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  const handleRegisterENS = async (e) => {
    e.preventDefault()
    if (subdomain.length > 0 && dapp.address === undefined) {
      setShowENSModal(true)
    }
  }

  const handlePublish = async (e) => {
    e.preventDefault()
    if (subdomain.length > 0 && dapp.address !== undefined) {
      setShowSignInModal(true)
    }
  }

  return (
    <Flex className="publish">
      {showENSModal && (
        <div sx={{ position: 'fixed', top: 0, left: 0, zIndex: 100000 }}>
          <Modal
            screen={showSignInModal ? 'signin' : 'connect'}
            noLeftShift
            close={() => {
              setShowENSModal(false)
            }}
          />
        </div>
      )}
      {showSignInModal && (
        <div sx={{ position: 'fixed', top: 0, left: 0, zIndex: 100000 }}>
          <Modal
            screen={showSignInModal ? 'signin' : 'connect'}
            noLeftShift
            close={() => {
              setShowSignInModal(false)
            }}
          />
        </div>
      )}
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
          <Styled.h4>Location</Styled.h4>
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
          <Styled.h4>Pointer</Styled.h4>
          <p>
            Register your API to an ENS domain that developers will reference when
            integrating.
          </p>
          <fieldset>
            <label>ENS Subdomain</label>
            <Input
              type="text"
              placeholder="{SUBDOMAIN}.open.web3.eth"
              pattern="[\w.-]"
              onChange={(e) => {
                setSubdomain(e.target.value)
              }}
              value={subdomain}
            />

            <p>
              <small>
                This option will cost ~0.0023 ETH ($2.90 USD)
                <br />
                Need ETH?{' '}
                <a
                  href="https://www.moonpay.com/"
                  target="_BLANK"
                  sx={{ color: '#509DAC', textDecoration: 'none' }}
                >
                  Purcahse with your bank or card here
                </a>
              </small>
            </p>
            <br />
            <Button
              variant="primaryMedium"
              onClick={handleRegisterENS}
              disabled={subdomain.length === 0}
            >
              Register ENS
            </Button>
          </fieldset>
        </section>
        <section>
          <Styled.h4>Publish to Web3Hub</Styled.h4>
          <p>
            Make your package discoverable on the Web3Hub. After publishing, the IPFS
            pacakge will be persistently pinned using Fleek. Learn more
          </p>
          <fieldset>
            <br />
            <Button variant="primaryMedium" onClick={handlePublish}>
              Publish
            </Button>
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
