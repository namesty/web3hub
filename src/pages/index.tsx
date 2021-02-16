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
        <div sx={{m: 'auto', maxWidth: '1200px'}}><h3>Browse APIs</h3></div>
        <Flex className="content" sx={{m: 'auto', maxWidth: '1200px'}}>
          <div className="apis" sx={{mr: 5}}>
            <ApiGrid/>
            <Pagination/>
          </div>
          <SortNav/>
        </Flex>
      </main>
    </Layout>
  )
}

export default Index
