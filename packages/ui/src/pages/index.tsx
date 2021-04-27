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

const Home = () => {
  // useEffect(() => {
  //   (async () => {
  //     console.log('test find')
  //     let name = 'SimpleStorage'
  //     const dataFind = await axios.get(`http://localhost:3001/apis/find/${name}`) 
  //     console.log(dataFind)
  //   })();
  // }, [])
  const [{ dapp }, dispatch] = useStateValue()
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
                {dapp?.apis && dapp.apis.map((api, idx) => (
                  <Card api={api} boxShadowOn key={idx + '-api'} />
                ))}
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
