/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

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
    </Layout>
  )
}

export default Index
