/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect } from 'react'
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import { useStateValue } from '../state/state'
import useSWR from 'swr'

type LayoutProps = {
  children?: any
}

const Layout = ({ children }: LayoutProps) => {
  const [,dispatch] = useStateValue()
  const { data: apis, error } = useSWR('/api/apis')

  useEffect(() => {
    dispatch({
      type: 'SET_AVAILABLE_APIS',
      payload: apis,
    })
  }, [apis])

  return (
    <div
      className="layout"
      sx={{
        '&::before, &::after': {
          display: 'none',
        },
      }}
    >
      {children}
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'border-box',
            position: 'relative',
            outline: 'none',
            '*::before, *::after': {
              boxSizing: 'border-box',
              position: 'relative',
            },
          },
          html: {
            scrollBehavior: 'smooth',
            fontSize: '100%',
            WebkitTextSizeAdjust: '100%',
            fontVariantLigatures: 'none',
            WebkitFontVariantLigatures: 'none',
            textRendering: 'optimizeLegibility',
            MozOsxFontSmoothing: 'grayscale',
            fontSmoothing: 'antialiased',
            WebkitFontSmoothing: 'antialiased',
            textShadow: 'rgba(0, 0, 0, 0.01) 0 0 1px',
            '&::before, &::after': {
              display: 'none',
            },
          },
          body: {
            minHeight: '100vh',
            scrollBehavior: 'smooth',
            margin: '0',
            padding: '0',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundAttachment: 'scroll',
            background: theme.colors.hazeGradient,
          },
          'body::before': {
            display: 'none',
            zIndex: -1,
            position: 'absolute',
            content: "''",
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'scroll',
          },
          'body::after': {
            display: 'none',
            zIndex: -1,
            position: 'absolute',
            content: "''",
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundAttachment: 'scroll',
          },
          main: {
            height: '100vh',
            overflowY: 'scroll',
            overflowX: 'hidden',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          },
          fieldset: {
            padding: 0,
            border: 'none',
          },
          '.contents': {
            maxWidth: '1224px',
            margin: 'auto',
            width: '100%',
            height: '100%',
          },
          'ul, ol, li': {
            margin: '0',
            padding: '0',
            listStyle: 'none',
          },
          'a, Button, [type="Button"], [type="reset"], [type="submit"], [type="file"], [type="file"]::-webkit-file-upload-Button': {
            textTransform: 'none',
            appearance: 'none',
            cursor: 'pointer',
          },
          'a:visited, a:active': {
            textDecoration: 'none',
          },
          'img, svg, picture, span, a, b, u, i, small, sub, strong, label': {
            display: 'inline-block',
          },
          'table, thead, tbody, tfoot, tr, td, th': {
            borderSpacing: '0',
            borderCollapse: 'collapse',
            textAlign: 'left',
          },
          'table tbody tr:nth-of-type(even)': {
            background: 'rgba(255, 255, 255, 0.04)',
          },
          'table tbody tr:hover': {
            background: 'rgba(255, 255, 255, 0.08)',
          },
          '.callout-text': {
            background: '#DDD',
            padding: '1rem',
            textAlign: 'center',
          },
          '.text-nav': {
            fontWeight: 'bold',
            fontSize: '12px',
            lineHeight: '14px',
            letterSpacing: '-0.6px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: theme.colors.w3MoreTeal,
          },
          '.bn-onboard-custom': {
            zIndex: 100000,
          },
        })}
      />
    </div>
  )
}
export default Layout
