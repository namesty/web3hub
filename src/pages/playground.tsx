/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../components/Layout'
import Playground from '../components/Playground'
import { Global } from '@emotion/core'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const PlaygroundPage = () => {
  return (
    <Layout>
      <Flex>
        <Navbar/>
        <main>
          <div className="contents">
            <Header onDark title="Playground"/>
            <Playground/>
          </div>
        </main>
      </Flex>
      <Global
        styles={(theme) => ({
          body: {
            background: 'none' + ' !important',
            backgroundColor: theme.colors.darkGreen + ' !important'
          }
        })}
      />
    </Layout>
  )
}

export default PlaygroundPage
