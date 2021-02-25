/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })

const Header = () => {
  const router = useRouter()
  return (
    <header
      role="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        mb: 5,
        backgroundColor: 'grayGreen',
        '*': { display: 'flex' },
        '.col': { flex: 3, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      <div className="col">
        <div className="brand" sx={{ mr: 3 }}>
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
        <nav sx={{ flex: 1 }}>
          <ul
            sx={{
              flex: 1,
              justifyContent: 'space-around',
              alignContent: 'center',
              li: {
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'w3NavHighlightTeal',
                },
                a: {
                  p: 4,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                },
              },
            }}
          >
            <li sx={{backgroundColor: router.pathname === '/' ? 'w3NavHighlightTeal' : 'transparent'}}>
              <Link href="/" sx={{ alignItems: 'center' }}>
                <a>
                  <div sx={{ flexDirection: 'column' }}>
                    <img
                      src="/images/box.svg"
                      alt="box"
                      sx={{ width: '13px', height: '13px', m: 'auto' }}
                    />
                    <div sx={{ alignItems: 'center' }}>
                      <img
                        src="/images/box.svg"
                        alt="box"
                        sx={{ width: '13px', height: '13px' }}
                      />
                      <img
                        src="/images/box.svg"
                        alt="box"
                        sx={{ width: '13px', height: '13px' }}
                      />
                    </div>
                  </div>
                  <span>&nbsp;</span>
                  <span className="text-nav">API's</span>
                </a>
              </Link>
            </li>
            <li sx={{backgroundColor: router.pathname === '/playground' ? 'w3NavHighlightTeal' : 'transparent'}}>
              <Link href="/playground">
                <a className="text-nav">
                  <img
                    src="/images/android.svg"
                    alt="android"
                    sx={{ width: '24px', height: '27px' }}
                  />
                  <span>&nbsp;</span>
                  <span>Playground</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="text-nav" href="https://web3api.dev" target="_BLANK">
                <span>Web3Api Docs</span>
                <span>&nbsp;</span>
                <img
                  src="/images/outbound.svg"
                  alt="outbound"
                  sx={{ width: '14px', height: '14px' }}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col" sx={{ flex: '3 !important' }}>
        <SignInArea />
      </div>
    </header>
  )
}

export default Header
