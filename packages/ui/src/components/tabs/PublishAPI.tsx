/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react'
import { jsx, Input, Flex, Button, Styled } from 'theme-ui'
import { useCreateSubdomain } from '../../hooks/ens/useCreateSubdomain'
import { useStateValue } from '../../state/state'
import getMetaDataFromPackageHash from '../../services/ipfs/getMetaDataFromPackageHash'
import Card from '../Card'
import Modal from '../Modal'
import { MAIN_DOMAIN, ZERO_ADDRESS } from '../../constants'
import { getOwner } from '../../services/ens/getOwner'

type ErrorMsg = {
  children: any
  bottomshift?: boolean
}

// error component
const ErrorMsg = ({ children, bottomshift }: ErrorMsg) => (
  <span
    sx={{
      fontSize: '14px',
      lineHeight: '22px',
      letterSpacing: '-0.4000000059604645px',
      textAlign: 'left',
      color: 'rgba(255, 0, 0, 0.5)',
      mt: 2,
      position: bottomshift ? 'relative' : 'absolute',
    }}
  >
    {children}
  </span>
)

const PublishAPI = () => {
  const [{ dapp }, dispatch] = useStateValue()

  // inputs
  const [subdomain, setsubdomain] = useState('')
  const [ipfs, setipfs] = useState('')

  // input states
  const [subdomainError, setsubdomainError] = useState('')
  const [subdomainSuccess, setsubdomainSuccess] = useState(false)
  const [subdomainLoading, setsubdomainLoading] = useState(false)

  // input states
  const [ipfsLoading, setipfsLoading] = useState(false)
  const [ipfsError, setipfsError] = useState('')
  const [ipfsSuccess, setipfsSuccess] = useState(false)

  // modals
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)

  // data
  const [apiData, setApiData] = useState(null)

  //ens
  const [executeCreateSubdomain] = useCreateSubdomain()

  useEffect(() => {
    if(subdomain !== '') {
      checkForENSAvailability()
    }
  }, [dapp.address])

  const checkForENSAvailability = async () => {
    if(dapp.address !== undefined){
      console.log('GOOD')
      setsubdomainLoading(true)
      try {
        const owner = await getOwner(dapp.web3, `${subdomain}.${MAIN_DOMAIN}`)
        if(owner === ZERO_ADDRESS) {
          setsubdomainSuccess(true)
          setsubdomainError('')
        } else {
          setsubdomainSuccess(false)
          setsubdomainError("Subdomain name is not available")
        }
      } catch(e) {
        console.log(e)
      }
      setsubdomainLoading(false)
    }
  }

  const handleSubdomainChange = (e) => {
    setsubdomain(e.target.value)
    setsubdomainError('')
    checkForENSAvailability()
  }

  const handleIPFSHashInput = async (e) => {
    setipfs(e.target.value)
    setipfsLoading(true)
    setipfsSuccess(false)
    setipfsError('')
    if (e.target.value !== '') {
      let metaData = await getMetaDataFromPackageHash(e.target.value)
      if(metaData === undefined) {
        setipfsLoading(false)
        setApiData(null)
        setipfsError('No Package Found')
      } else {
        setipfsLoading(false)
        setipfsSuccess(true)  
        setApiData(metaData)
      }
    } else {
      setipfsLoading(false)
    }
  }

  const handleRegisterENS = async (e) => {
    e.preventDefault()
    if (dapp.address === undefined) {
      setShowConnectModal(true)
    } else {
      executeCreateSubdomain(subdomain, ipfs)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (apiData && subdomain.length > 0) {
      setShowSignInModal(true)
    }
    console.log('SUBMIT')
    console.log(e.target)
  }

  const handleInvalid = async (e) => {
    e.preventDefault()
    if (e.target.name === 'ipfs') {
      setipfsError('Please enter a valid IPFS hash')
    }
    if (e.target.name === 'ens') {
      setsubdomainError('Please enter a valid ENS sub-domain')
    }
  }

  const ipfsState = ipfsLoading ? 'loading' : ipfsSuccess ? 'success' : ipfsError ? 'error' : ''
  const subdomainState = subdomainLoading ? 'loading' : subdomainSuccess ? 'success' : subdomainError ? 'error' : ''

  return (
    <Flex className="publish">
      {showConnectModal && (
        <div sx={{ position: 'fixed', top: 0, left: 0, zIndex: 100000 }}>
          <Modal
            screen={'connect'}
            noLeftShift
            close={() => {
              setShowConnectModal(false)
            }}
          />
        </div>
      )}
      {showSignInModal && (
        <div sx={{ position: 'fixed', top: 0, left: 0, zIndex: 100000 }}>
          <Modal
            screen={'signin'}
            noLeftShift
            close={() => {
              setShowSignInModal(false)
            }}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        sx={{
          flex: 7,
          section: {
            mb: '4.375rem',
          },
          h4: {
            color: 'w3darkGreen',
            mb: 2,
          },
          '.fieldset': {
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
            mb: 2,
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
            pr: 5,
            borderRadius: '8px',
            fontFamily: 'Roboto Mono',
            fontSize: '16px',
            lineHeight: '140.62%',
          },
          '@keyframes rotate': {
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
          '.inputwrap': {
            '&:after': {
              display: 'block',
              position: 'absolute',
              right: '.75rem',
              top: 'calc(50% - 11px)',
              content: "''",
              width: '22px',
              height: '22px',
            },
            '&.loading': {
              '&:after': {
                animation: 'rotate 1s infinite linear',
                background: 'url(/images/loading.svg) no-repeat',
              },
            },
            '&.success': {
              '&:after': {
                background: 'url(/images/check-circle.svg) no-repeat',
              },
            },
            '&.error': {
              input: {
                borderColor: 'rgba(255, 0, 0, 0.5)',
              },
              '&:after': {
                background: 'url(/images/fail.svg) no-repeat',
              },
            },
          },
        }}
      >
        <section>
          <Styled.h4>Location</Styled.h4>
          <p>Point Web3hub to where your package has been uploaded.</p>
          <div className="fieldset">
            <label>IPFS location</label>
            <div className={'inputwrap ' + ipfsState}>
              <Input
                type="text"
                name="ipfs"
                placeholder="QmPBWKRhX9aqQh4zsn..."
                required
                pattern="^Qm[1-9A-HJ-NP-Za-km-z]{44}(\/.*)?|^\/ipns\/.+"
                onChange={handleIPFSHashInput}
                value={ipfs}
                disabled={ipfsSuccess}
              />
            </div>
            {ipfsError && <ErrorMsg>{ipfsError}</ErrorMsg>}
          </div>
        </section>
        <section>
          <Styled.h4>Pointer</Styled.h4>
          <p>
            Register your API to an ENS domain that developers will reference when
            integrating.
          </p>
          <div className="fieldset">
            <label>ENS Subdomain</label>
            <div className={'inputwrap ' + subdomainState}>
              <Input
                type="text"
                name="ens"
                placeholder="{SUBDOMAIN}.open.web3.eth"
                required
                pattern="^[^.]+\.open\.web3\.eth$"
                onChange={handleSubdomainChange}
                value={subdomain}
              />
            </div>
            {subdomainError && <ErrorMsg bottomshift>{subdomainError}</ErrorMsg>}
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
          </div>
        </section>
        <section>
          <Styled.h4>Publish to Web3Hub</Styled.h4>
          <p>
            Make your package discoverable on the Web3Hub. After publishing, the IPFS
            pacakge will be persistently pinned using Fleek. Learn more
          </p>
          <div className="fieldset">
            <br />
            <Button
              variant="primaryMedium"
              type="submit"
              disabled={subdomain.length === 0 || ipfs.length === 0}
            >
              Publish
            </Button>
          </div>
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
          {apiData && <Card api={apiData} ipfsHash={ipfs} boxShadowOn noHover />}
        </div>
      </Flex>
    </Flex>
  )
}

export default PublishAPI
