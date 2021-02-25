/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'

const Index = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <div>
          <h3>Browse APIs</h3>
        </div>
        <section className="content">
          <SortNav />
          <br/>
          <ApiGrid />
        </section>
        <Pagination />
      </main>
      <br/><br/><br/>
    </Layout>
  )
}

export default Index
