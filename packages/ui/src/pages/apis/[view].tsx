/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import Stars from '../../components/Stars'
import Badge from '../../components/Badge'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import BottomSpace from '../../components/BottomSpace'
import PlaygroundImg from '../../../public/images/playground.svg'
import { useRouter } from 'next/router'

const ApiView = () => {
  const router = useRouter()
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header backNav={`Browse API's`} />
            <div
              className="wrap"
              sx={{
                borderRadius: '0.5rem',
                bg: 'white',
                px: '2rem',
                py: '2rem',
              }}
            >
              <Flex className="top">
                <img
                  className="api-logo"
                  src="/images/uniswap.png"
                  sx={{
                    width: '13.125rem',
                    height: '13.125rem',
                    mr: 4,
                  }}
                />
                <div className="api-info" sx={{ mr: 4, width: '28.125rem' }}>
                  <Styled.h1
                    className="title"
                    sx={{
                      mb: 3,
                      mt: 4,
                      fontWeight: 'bold',
                      fontSize: 66,
                      color: 'black',
                      lineHeight: '5rem',
                      letterSpacing: '-0.125rem',
                    }}
                  >
                    Uniswap V2
                  </Styled.h1>
                  <div
                    className="subtitle"
                    sx={{
                      mb: 4,
                      color: '#86909F',
                      fontSize: '1.125rem',
                      fontWeight: '500',
                      lineHeight: '1.3713rem',
                    }}
                  >
                    Easily swap between any two ERC-20 tokens
                  </div>
                  <p
                    className="description"
                    sx={{
                      lineHeight: '1.25rem',
                    }}
                  >
                    Pariatur occaecat ullamco excepteur elit quis nostrud cillum fugiat
                    commodo cupidatat laboris est nulla. Qui in magna ut eu duis est aute
                    aute sunt cillum excepteur. Deserunt est ea deserunt occaecat tempor
                    proident consectetur sint qui nostrud. Anim nulla pariatur velit sint
                    proident cupidatat ut amet dolor. Voluptate nisi aute cupidatat ea
                    nostrud exercitation laborum. Excepteur exercitation esse aute non
                    velit ea sit nisi sit.
                  </p>
                </div>
                <div
                  className="info-card"
                  sx={{
                    px: '1.5rem',
                    py: '2rem',
                    minWidth: '22.5rem',
                    boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
                    borderRadius: '0.5rem',
                    top: 4,
                    position: 'absolute',
                    right: 0,
                    zIndex: 1,
                    background: 'white',
                  }}
                >
                  <Flex sx={{ justifyContent: 'space-between', mb: '0.625rem' }}>
                    <div className="left">
                      <Styled.h4 className="title">UniswapV2</Styled.h4>
                    </div>
                    <div className="right">
                      <Stars count={320} large />
                    </div>
                  </Flex>
                  <ul
                    className="links"
                    sx={{
                      '*': {
                        color: 'w3green',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: '400',
                        lineHeight: '1.0625rem',
                        letterSpacing: '0rem',
                      },
                      li: {
                        mb: '1.5rem',
                      },
                    }}
                  >
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '1.1875rem', mr: 2 }}
                        src="/images/link.svg"
                        alt="icon"
                      />
                      <a href="uniswapv2.open.web3.eth" target="_BLANK">
                        uniswapv2.open.web3.eth
                      </a>
                    </li>
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '1.1875rem', mr: 2 }}
                        src="/images/github.svg"
                        alt="icon"
                      />
                      <a href="https://www.github.com/uniswap/uniswap-v2" target="_BLANK">
                        https://www.github.com/uniswap/uniswap-v2
                      </a>
                    </li>
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '1.1875rem', mr: 2 }}
                        src="/images/doc.svg"
                        alt="icon"
                      />
                      <a href="https://www.github.com/uniswap/docs" target="_BLANK">
                        https://www.github.com/uniswap/docs
                      </a>
                    </li>
                  </ul>
                  <ul className="category-Badges" sx={{ display: 'flex', mt: 3, ml: 0 }}>
                    <li sx={{ ml: -2 }}>
                      <Badge label="ipfs" />
                    </li>
                    <li sx={{ ml: -2 }}>
                      <Badge label="defi" />
                    </li>
                    <li sx={{ ml: -2 }}>
                      <Badge label="amm" />
                    </li>
                  </ul>
                  <br />
                  <Button
                    variant="primaryWithGradient"
                    onClick={() => {
                      router.push('/playground')
                    }}
                  >
                    <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        sx={{ maxWidth: '1.1875rem', mr: 2 }}
                        src="/images/playground.svg"
                        alt="icon"
                      />
                      <PlaygroundImg
                        stroke="#FFF"
                        sx={{
                          width: '2.125rem',
                          height: '2rem',
                          position: 'absolute',
                          left: '-12%',
                        }}
                      />
                      <span>Playground</span>
                    </Flex>
                  </Button>
                </div>
              </Flex>

              <Flex
                className="bottom"
                sx={{ bg: '#FCFDFD', borderTop: '0.0625rem solid #ECF4F2', mt: 4, pt: 4 }}
              >
                <img
                  className="api-logo"
                  src="api-logo.svg"
                  sx={{
                    opacity: 0,
                    width: '13.125rem',
                    height: '13.125rem',
                    mr: 4,
                  }}
                />
                <div sx={{ width: '34.375rem' }}>
                  <Styled.h2 sx={{ textAlign: 'center' }}>Get Started</Styled.h2>
                  <Styled.code>
                    <Styled.pre>{`yarn install @web3api/client`}</Styled.pre>
                  </Styled.code>
                  <Styled.code>
                    <Styled.pre>
                      {`import {
  Web3API,
  Ethereum,
  IPFS,
  Subgraph
} from "@web3api/client-js";

const api = new Web3API({
  uri: "simplestorage.eth",
  portals: {
    ethereum: new Ethereum({ provider: (window as any).ethereum }),
    ipfs: new IPFS({ provider: "http://localhost:5001" }),
    subgraph: new Subgraph({ provider: "http://localhost:8020" })
  }
})`}
                    </Styled.pre>
                  </Styled.code>
                </div>
              </Flex>
              <BottomSpace />
              <div className="Playground" />
            </div>
            <BottomSpace />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default ApiView
