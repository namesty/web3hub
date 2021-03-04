/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })

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
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'w3NavHighlightTeal',
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
            <li
              sx={{
                backgroundColor:
                  router.pathname === '/' ? 'w3NavHighlightTeal' : 'transparent',
              }}
            >
              <Link href="/" sx={{ alignItems: 'center' }}>
                <a>
                  <div sx={{ flexDirection: 'row', transform: 'rotate(90deg)' }}>
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
                  <div sx={{mb: 3}}/>
                  <span className="text-nav">API's</span>
                </a>
              </Link>
            </li>
            <li
              sx={{
                backgroundColor:
                  router.pathname === '/playground'
                    ? 'w3NavHighlightTeal'
                    : 'transparent',
              }}
            >
              <Link href="/playground">
                <a className="text-nav">
                  <img
                    src="/images/playground.svg"
                    alt="playground"
                    sx={{ width: '24px', height: '27px' }}
                  />
                  <span>&nbsp;</span>
                  <span>Playground</span>
                </a>
              </Link>
            </li>
            <li>
              <a className="text-nav" href="https://web3api.dev" target="_BLANK">
                
                <img
                  src="/images/doc.svg"
                  alt="outbound"
                  sx={{ height: '19px' }}
                />
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
