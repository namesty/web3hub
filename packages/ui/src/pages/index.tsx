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

import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  useEffect(() => {
    (async () => {
      console.log('test all')
      const dataAll = await axios.get(`http://localhost:3001/apis/all`) 
      console.log(dataAll)

      console.log('test find')
      let name = 'SimpleStorage'
      const dataFind = await axios.get(`http://localhost:3001/apis/find/${name}`) 
      console.log(dataFind)
    })();
  }, [])
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
