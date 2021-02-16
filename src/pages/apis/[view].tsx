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
      <main>
        <div className="content">
          <h1>{router.query.view}</h1>
          <img className="api-logo" src="logo.svg" />
          <div className="api-info">
            <section>
              <div className="title">
                <h1>Uniswap V2</h1>
                <span className="url">uniswapv2.opej.web3.eth</span>
              </div>
              <div className="subtitle">Easily swap between any two ERC-20 tokens</div>
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
              <div className="stars">
                <img className="star" src="star.svg" />
                <span>12</span>
              </div>
            </section>
            <section>
              <h2>Get Started</h2>
              <code>
                <pre>{`yarn install @web3api/client`}</pre>
              </code>
              <code>
                <pre>{`
                  import {
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
                  })`}</pre>
              </code>
            </section>
          </div>
          <div className="Playground" />
        </div>
      </main>
    </Layout>
  )
}

export default ApiView
