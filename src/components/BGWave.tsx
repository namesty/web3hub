/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'

type BGWaveProps = {
  dark?: boolean
  light?: boolean
}
const BGWave = ({ dark, light }: BGWaveProps) => {
  let color = dark ? 'dark' : light ? 'light' : 'light'
  return (
    <Global
      styles={(theme) => ({
        'body::before': {
          display: 'block !important',
          zIndex: '-1 !important',
          top: '0 !important',
          left: 'auto !important',
          right: '0 !important',
          background: `url(/images/background-wave-${color}.svg) no-repeat right !important`,
        },
      })}
    />
  )
}

export default BGWave
