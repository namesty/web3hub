/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const Card = () => {
  return (
    <div className="Card">
      <img className="api-logo" src="APILOGO.svg" />
      <div className="info">
        <div className="row">
          <div className="title"> </div>
          <div className="subtitle"></div>
        </div>
        <div className="row">
          <div className="left">
            <a href="/{API}/Docs">View Docs</a>
          </div>
          <div className="right">
            <div className="stars">
              <img src="star.svg" className="star" />
              <span>17</span>
            </div>
            <button>IPFS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
