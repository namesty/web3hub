/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })

const Header = () => {
  return (
    <header
      role="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black',
        p: 2,
        mb: 5,
        '*': { display: 'flex' },
        '.col': { flex: 1, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      <div className="col">
        <div className="brand" sx={{ mr: 3 }}>
          <Link href="/">
            <a>
              <div className="logo">
                <img src="/images/X.png" alt="WEB3HUB" sx={{ fontWeight: 'bold' }} />
              </div>
            </a>
          </Link>          
        </div>
        <nav>
          <ul>
            <li>
              <a href="https://web3api.dev" target="_BLANK">Web3Api Docs</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col">
        <SignInArea />
      </div>
    </header>
  )
}

export default Header
