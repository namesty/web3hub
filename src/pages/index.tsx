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
        <div><h3>Browse APIs</h3></div>
        <Flex className="content">
          <div className="apis" sx={{mr: 5}}>
            <ApiGrid/>
          </div>
          <SortNav/>
        </Flex>
        <Pagination/>
      </main>
    </Layout>
  )
}

export default Index
