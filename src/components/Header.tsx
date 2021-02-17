/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const TEMPUSER = '0x643udbeu37hdbwu'

const Header = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const handleSignInClick = () => {
    setUser(TEMPUSER)
  }
  const handleSignOutClick = () => {
    setUser(null)
  }
  const handleNewAPIClick = () => {
    router.push('/apis/create?activeTab=create')
  }

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
          <a href="/">
            <div className="logo">
              <img src="/images/X.png" alt="WEB3HUB" sx={{ fontWeight: 'bold' }} />
            </div>
          </a>
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
        <div className="user-area" sx={{ li: { ml: 2 } }}>
          <ul sx={{display: 'flex', alignItems: 'center'}}>
            {user !== null && (
              <React.Fragment>
                <li>
                  <Link href="/"><a>All APIs</a></Link>
                </li>
                <li>
                  <Link href="/apis/user"><a>My APIs</a></Link>
                </li>
                <li>
                  <Button onClick={handleNewAPIClick} sx={{ display: 'inline-block' }}>New API</Button>
                </li>
              </React.Fragment>
            )}
            <li>
              {user === null && (
                <Button onClick={handleSignInClick} sx={{ display: 'inline-block !important' }}>
                  Sign In
                </Button>
              )}
              {user !== null && 
                <Button onClick={handleSignOutClick} sx={{ display: 'inline-block !important' }}>
                  {TEMPUSER}
                </Button>
              }
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
