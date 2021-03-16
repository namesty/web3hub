/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import APIs from '../../public/images/apis.svg'
import PlaygroundImg from '../../public/images/playground.svg'
import Doc from '../../public/images/Doc.svg'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav
      role="nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 4,
        backgroundColor: 'grayGreen',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '112px',
        zIndex: 100,
        '*': { display: 'flex', flexDirection: 'column', },
        '.col': { flex: 3, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      <div className="col">
        <div className="brand" sx={{ mb: 3 }}>
          <Link href="/">
            <a>
              <div className="logo">
                <img src="/images/web3hub-logo.svg" alt="web3hub-logo" />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="col" sx={{ flex: '6 !important', justifyContent: 'center' }}>
        <div sx={{ flex: 1 }}>
          <ul
            sx={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              li: {
                // transition: 'border-left-color, background-color 2s ease',
                display: 'flex',
                alignItems: 'center',
                borderLeft: '2px solid',
                borderLeftColor: 'grayGreen',
                svg: {
                  stroke: '#509DAC',
                },
                '&:hover': {
                  borderLeftColor: 'w3NavHighlightTeal',
                  backgroundColor: 'w3NavHighlightTeal',
                },
                '&.active': {
                  borderLeftColor: 'w3tealHighlight',
                  backgroundColor: 'w3NavHighlightTeal',
                  span: { color: 'white !important'},
                  svg: {
                    stroke: 'white',
                  }
                },
                a: {
                  px: 3,
                  py: 4,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                },
              },
            }}
          >
            <li className={router.pathname === '/' || router.pathname === '/apis/user' ? 'active' : ''}>
              <Link href="/" sx={{ alignItems: 'center' }}>
                <a>
                  <APIs />
                  <span sx={{height: 2}}>&nbsp;</span>
                  <span className="text-nav">API's</span>
                </a>
              </Link>
            </li>
            <li className={router.pathname === '/playground' ? 'active' : ''}>
              <Link href="/playground">
                <a className="text-nav">
                  <PlaygroundImg />
                  <span sx={{height: 2}}>&nbsp;</span>
                  <span>Playground</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="text-nav" href="https://web3api.dev" target="_BLANK">
                <Doc/>
                <span>&nbsp;</span>
                <span>Docs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col" sx={{ flex: '3 !important' }}/>
    </nav>
  )
}

export default Navbar