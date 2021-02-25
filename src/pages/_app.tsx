import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'
import Head from 'next/head'
import 'animate.css/animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </StateProvider>
  )
}

export default MyApp
