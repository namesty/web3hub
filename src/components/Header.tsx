/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [user, setUser] = useState(null)
  const handleSignInClick = () => {
    if (user === null) {
      setUser({})
    }
    if (user !== null) {
      setUser(null)
    }
  }
  return (
    <header
      role="header"
      sx={{
        display: 'flex',
        border: '1px solid black',
        p: 2,
        mb: 4,
        '*': { display: 'flex' },
        '.col': { flex: 1, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      <div className="col">
        <div className="brand" sx={{ mr: 3 }}>
          <a href="/">
            <div className="logo">
              <img src="images/X.png" alt="WEB3HUB" sx={{ fontWeight: 'bold' }} />
            </div>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/docs">Web3Api Docs</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col">
        <div className="user-area" sx={{ li: { ml: 2 } }}>
          <ul>
            {user !== null && (
              <React.Fragment>
                <li>
                  <a href="/apis">All APIs</a>
                </li>
                <li>
                  <a href="/user/apis">My APIs</a>
                </li>
                <li>
                  <button sx={{ display: 'inline-block' }}>New API</button>
                </li>
              </React.Fragment>
            )}
            <li>
              {user === null && (
                <button onClick={handleSignInClick} sx={{ display: 'inline-block !important' }}>
                  Sign In
                </button>
              )}
              {user !== null && <span onClick={handleSignInClick} sx={{cursor: 'pointer'}}>0x643udbeu37hdbwu</span>}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
