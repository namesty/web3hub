/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, useThemeUI } from 'theme-ui'
import Layout from '../components/Layout'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BGWave from '../components/BGWave'

const Index = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header title="Browse APIs"/>
            <section className="content">
              <SortNav />
              <br />
              <ApiGrid />
            </section>
            <br />
            <br />
            <br />
          </div>
        </main>
      </Flex>
      <BGWave light/>
    </Layout>
  )
}

export default Index
