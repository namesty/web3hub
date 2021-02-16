/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'

const Docs = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <h1>DOCS</h1>
      </main>
    </Layout>
  )
}

export default Docs
