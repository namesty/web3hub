/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Global } from '@emotion/core'
import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Playground from '../../components/Playground'

const PlaygroundPage = () => {
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents animate">
            <Header onDark title="Playground" />
            <Playground/>
          </div>
        </main>
      </Flex>
      <Global
        styles={(theme) => ({
          body: {
            background: 'none' + ' !important',
            backgroundColor: theme.colors.w3shade0 + ' !important',
          },
        })}
      />
    </Layout>
  )
}

export default PlaygroundPage
