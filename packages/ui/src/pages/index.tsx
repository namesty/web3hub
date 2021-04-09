/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useStateValue } from '../state/state'

import Layout from '../components/Layout'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BGWave from '../components/BGWave'
import BottomSpace from '../components/BottomSpace'
import Card from '../components/Card'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [{ dapp }] = useStateValue()

  useEffect(() => {
    ;(async () => {
      if (dapp.github) {
        const test = await axios.post(
          'http://localhost:3001/publish',
          {
            name: 'Paraswap',
            description: 'DEX Aggregator',
            subtext: 'Cool aggregator',
            icon: 'paraswap.icon',
            location: 'ipfs://QmUvHu18pVVJu5WqWbB2YJxb7LkL4YeKpzwYhuetWqD3pj',
            pointers: ['brazon.eth'],
          },
          {
            headers: {
              Authorization: 'token ' + dapp.github,
            },
            withCredentials: true,
          },
        )
        console.log(test)
      }
    })()
  }, [dapp.github])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents animate">
            <Header title="Browse APIs" />
            <section className="content">
              <SortNav />
              <ApiGrid>
                {/* {dapp?.apis && dapp.apis.map((api, idx) => (
                  <Card api={api} boxShadowOn key={idx + '-api'} />
                ))} */}
              </ApiGrid>
            </section>
            <BottomSpace />
          </div>
        </main>
      </Flex>
      <BGWave light />
    </Layout>
  )
}

export default Home
