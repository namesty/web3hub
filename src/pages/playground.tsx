/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import Playground from '../components/Playground'
import { Global } from '@emotion/core'

const PlaygroundPage = () => {
  return (
    <Layout>
      <main>
        <Playground/>
        <Global
        styles={(theme) => ({
          body: {
            bg: theme.colors.darkGreen + ' !important'
          }
        })}
      />
      </main>
    </Layout>
  )
}

export default PlaygroundPage
