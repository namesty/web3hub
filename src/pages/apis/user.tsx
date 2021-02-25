/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import ApiGrid from '../../components/ApiGrid'
import SortNav from '../../components/SortNav'

const UserApis = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <div>
          <h3>My APIs</h3>
        </div>
        <section className="content">
          <SortNav />
          <br/>
          <ApiGrid />
        </section>
      </main>
      <br/><br/><br/>
    </Layout>
  )
}

export default UserApis
