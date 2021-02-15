/** @jsx jsx */
import { jsx } from 'theme-ui'

const Header = () => {
  return (
    <header role="header">
      <div class="col">
        <div class="brand">
          <a href="/">
            <div class="logo">
              <img src="images/X.png" alt="logo" />
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
      <div class="col">
        <div class="user-area">
          <ul>
            <li>
              <a href="/apis">All APIs</a>
            </li>
            <li>
              <a href="/user/apis">My APIs</a>
            </li>
            <li>
              <button>New API</button>
            </li>
            <li>
              <span>Sign In</span>
              <span>0x643udbeu37hdbwu</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
