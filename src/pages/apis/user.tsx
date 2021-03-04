/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import ApiGrid from '../../components/ApiGrid'
import SortNav from '../../components/SortNav'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

const UserApis = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header title="My API's" />
            <section className="content">
              <SortNav />
              <br />
              <ApiGrid />
            </section>
          </div>
        </main>
      </Flex>
      <br />
      <br />
      <br />
    </Layout>
  )
}

export default UserApis
