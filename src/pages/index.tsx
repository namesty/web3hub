/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'
import Navbar from '../components/Navbar'
import Modal from '../components/Modal'

const Index = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <div>
              <Styled.h1>Browse APIs</Styled.h1>
            </div>
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
