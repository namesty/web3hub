/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import Playground from '../components/Playground'
import { Global } from '@emotion/core'
import Navbar from '../components/Navbar'

const PlaygroundPage = () => {
  const {theme} = useThemeUI()
  return (
    <Layout>
      <Flex>
        <Navbar/>
        <main>
          <div className="contents">
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
