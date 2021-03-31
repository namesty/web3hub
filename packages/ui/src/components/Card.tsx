/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import Link from 'next/link'
import Stars from './Stars'
import Badge from './Badge'

type CardProps = {
  api?: any
  ipfsHash: string
  boxShadowOn?: boolean
  noHover?: boolean
}

const cloudFlareGateway = 'https://cloudflare-ipfs.com/ipfs/'

const sample = {
  name: 'SimpleStorage (ETH)',
  description: 'SimpleStorage Web3API Using Ethereum',
  icon: './meta/imgs/web3api.svg',
  banner: './meta/imgs/web3api-banner.svg',
  links: [
    {
      name: 'GitHub',
      icon: './meta/imgs/github.svg',
      url: 'https://github.com/Web3-API/demos/tree/main/simple-storage/web3api',
    },
    {
      name: 'Website',
      icon: './meta/imgs/web3api.svg',
      url: 'https://web3api.dev',
    },
  ],
  queries: [
    {
      name: 'Deploy Storage Contract',
      description: 'Deploy the SimpleStorage contract onto Ethereum.',
      query: './meta/queries/deploy.graphql',
    },
    {
      name: 'Get Storage Value',
      description:
        'Get the storage value within an existing SimpleStorage contract on Ethereum.',
      query: './meta/queries/get.graphql',
    },
    {
      name: 'Set Storage Value',
      description:
        'Set the storage value within an existing SimpleStorage contract on Ethereum.',
      query: './meta/queries/set.graphql',
    },
  ],
}

const Card = ({ api, ipfsHash, boxShadowOn, noHover }: CardProps) => {
  return (
    <div
      className="Card"
      sx={{
        borderRadius: '0.5rem',
        bg: 'white',
        transition: 'transform .2s ease',
        boxShadow: boxShadowOn ? '0rem 2rem 2.75rem rgba(28, 94, 93, 0.1)' : 'none',
        '&:hover': {
          transform: noHover ? 'none' : 'translateY(-5px)',
          boxShadow: boxShadowOn ? '0rem 2rem 2.75rem rgba(28, 94, 93, .125)' : 'none',
        },
      }}
    >
      <Link href={`${ipfsHash}`}>
        <a sx={{ textDecoration: 'none', p: 4 }}>
          <div className="wrap-contents">
            <div sx={{ display: 'block', m: 'auto' }}>
              <img
                className="api-logo"
                src={`${cloudFlareGateway}${ipfsHash}${api.icon.replace('./','/')}`}
                sx={{
                  width: '8.75rem',
                  height: '8.75rem',
                  display: 'block',
                  m: 'auto',
                }}
              />
            </div>

            <div className="info">
              <div className="row" sx={{ justifyContent: 'space-between' }}>
                <Styled.h3
                  className="title"
                  sx={{
                    textAlign: 'center',
                    my: 2,
                    fontWeight: 'bold',
                    fontSize: '1.25rem',
                    lineHeight: '1.75rem',
                    letterSpacing: '-0.01em',
                    color: 'black',
                  }}
                >
                  {api.name}
                </Styled.h3>
                <div
                  className="subtitle"
                  sx={{
                    textAlign: 'center',
                    my: 2,
                    fontFamily: 'Montserrat',
                    fontSize: '0.875rem',
                    lineHeight: '1.125rem',
                    color: 'text',
                    mixBlendMode: 'normal',
                  }}
                >
                  {api.description}
                </div>
                <Flex
                  sx={{
                    alignItems: 'center',
                    m: 'auto',
                    justifyContent: 'center',
                    my: 3,
                    mb: 4,
                  }}
                >
                  <Stars count={320} />
                </Flex>
                <Flex sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Badge label="ipfs" />
                </Flex>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
