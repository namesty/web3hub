/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import ApiGrid from '../../components/ApiGrid'

const UserApis = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <div sx={{m: 'auto', maxWidth: '1200px'}}><h3>My APIs</h3></div>
        <Flex className="content" sx={{m: 'auto', maxWidth: '1200px'}}>
          <div className="apis" sx={{mr: 5}}>
            <ApiGrid/>
          </div>
        </Flex>
      </main>
    </Layout>
  )
}

export default UserApis
