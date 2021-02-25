/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const ApiView = () => {
  const { theme } = useThemeUI()
  const router = useRouter()
  return (
    <Layout>
      <main sx={{ maxWidth: '700px' }}>
        <div className="content">
          <img
            className="api-logo"
            src="api-logo.svg"
            sx={{
              background: 'black',
              width: '270px',
              height: '270px',
              position: 'absolute',
              left: '-300px',
            }}
          />
          <div className="api-info">
            <section>
              <Flex className="title" sx={{ justifyContent: 'space-between' }}>
                <h1 sx={{ mb: 0 }}>Uniswap V2</h1>
                <a
                  className="url"
                  sx={{ display: 'inline-block', p: 2, px: 4, border: '1px solid black' }}
                >
                  uniswapv2.opej.web3.eth
                </a>
              </Flex>
              <div className="subtitle" sx={{ mb: 4 }}>
                Easily swap between any two ERC-20 tokens
              </div>
              <p className="description">
                Pariatur occaecat ullamco excepteur elit quis nostrud cillum fugiat
                commodo cupidatat laboris est nulla. Qui in magna ut eu duis est aute aute
                sunt cillum excepteur. Deserunt est ea deserunt occaecat tempor proident
                consectetur sint qui nostrud. Anim nulla pariatur velit sint proident
                cupidatat ut amet dolor. Voluptate nisi aute cupidatat ea nostrud
                exercitation laborum. Excepteur exercitation esse aute non velit ea sit
                nisi sit.
              </p>
              <a className="repo-link" href="https://www.github.com/GITHUBREPO">
                Github Repo
              </a>
              <Flex className="stars" sx={{ alignContent: 'center' }}>
                <img className="star" src="/images/star-black.svg" />
                <span>12</span>
              </Flex>
            </section>
            <br />
            <br />
            <section>
              <h2 sx={{ textAlign: 'center' }}>Get Started</h2>
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
            </section>
          </div>
          <br />
          <br />
          <br />
          <div className="Playground" />
        </div>
      </main>
      <br/><br/><br/>
    </Layout>
  )
}

export default ApiView
