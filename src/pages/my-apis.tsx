/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'
import ApiGrid from '../components/ApiGrid'

const MyApis = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <Flex><h3>Published(2)</h3><h3>Starred(3)</h3></Flex>
        <div className="content">
          <div className="apis">
            <ApiGrid/>
            <Pagination/>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default MyApis
