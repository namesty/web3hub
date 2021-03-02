/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
// import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Stars from '../../components/Stars'
import Badge from '../../components/Badge'
import Navbar from '../../components/Navbar'

const ApiView = () => {
  const { theme } = useThemeUI()
  // const router = useRouter()
  return (
    <Layout>
      <Flex>
        <Navbar/>
        <main>
          <div className="contents">
            <div
              className="wrap"
              sx={{
                borderRadius: '8px',
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
                    width: '210px',
                    height: '210px',
                    mr: 4,
                  }}
                />
                <div className="api-info" sx={{ mr: 4, width: '450px' }}>
                  <Styled.h1
                    className="title"
                    sx={{
                      mb: 3,
                      mt: 4,
                      fontWeight: 'bold',
                      fontSize: 66,
                      color: 'black',
                      lineHeight: '80px',
                      letterSpacing: '-2px',
                    }}
                  >
                    Uniswap V2
                  </Styled.h1>
                  <div
                    className="subtitle"
                    sx={{
                      mb: 4,
                      color: '#86909F',
                      fontSize: '18px',
                      fontWeight: '500',
                      lineHeight: '21.94px',
                    }}
                  >
                    Easily swap between any two ERC-20 tokens
                  </div>
                  <p
                    className="description"
                    sx={{
                      fontFamily: 'Inter',
                      lineHeight: '20px',
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
                    minWidth: '360px',
                    boxShadow: '0px 5px 10px 5px #DDD',
                    borderRadius: '8px',
                    top: 4,
                    position: 'absolute',
                    right: 0,
                    zIndex: 1,
                    background: 'white',
                  }}
                >
                  <Flex sx={{ justifyContent: 'space-between', mb: '10px' }}>
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
                        color: '#509DAC',
                        textDecoration: 'none',

                        fontFamily: 'Inter',
                        fontSize: '14px',

                        fontWeight: '400',
                        lineHeight: '17px',
                        letterSpacing: '0px',
                      },
                      li: {
                        mb: '1.5rem',
                      },
                    }}
                  >
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '19px', mr: 2 }}
                        src="/images/link.svg"
                        alt="icon"
                      />
                      <a href="uniswapv2.open.web3.eth" target="_BLANK">
                        uniswapv2.open.web3.eth
                      </a>
                    </li>
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '19px', mr: 2 }}
                        src="/images/github.svg"
                        alt="icon"
                      />
                      <a href="https://www.github.com/uniswap/uniswap-v2" target="_BLANK">
                        https://www.github.com/uniswap/uniswap-v2
                      </a>
                    </li>
                    <li sx={{ display: 'flex' }}>
                      <img
                        sx={{ maxWidth: '19px', mr: 2 }}
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
                      <Badge label="ipfs" dark />
                    </li>
                    <li sx={{ ml: -2 }}>
                      <Badge label="defi" dark />
                    </li>
                    <li sx={{ ml: -2 }}>
                      <Badge label="amm" dark />
                    </li>
                  </ul>
                  <br />
                  <Button variant="primary">
                    <Flex sx={{ alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        sx={{ maxWidth: '19px', mr: 2 }}
                        src="/images/android.svg"
                        alt="icon"
                      />
                      <span>Playground</span>
                    </Flex>
                  </Button>
                </div>
              </Flex>

              <Flex
                className="bottom"
                sx={{ bg: '#FCFDFD', borderTop: '1px solid #ECF4F2', mt: 4, pt: 4 }}
              >
                <img
                  className="api-logo"
                  src="api-logo.svg"
                  sx={{
                    opacity: 0,
                    width: '210px',
                    height: '210px',
                    mr: 4,
                  }}
                />
                <div sx={{ width: '550px' }}>
                  <Styled.h2 sx={{ textAlign: 'center' }}>Get Started</Styled.h2>
                  <code>
                    <pre>{`yarn install @web3api/client`}</pre>
                  </code>
                  <code>
                    <pre>
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
                    </pre>
                  </code>
                </div>
              </Flex>
              <br />
              <br />
              <br />
              <div className="Playground" />
            </div>
            <br />
            <br />
            <br />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default ApiView
