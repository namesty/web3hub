/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const Card = () => {
  return (
    <div className="Card">
      <img className="api-logo" src="APILOGO.svg" sx={{backgroundColor: 'gray', width: '270px', height: '270px'}}/>
      <div className="info">
        <div className="row">
          <div className="title">UniswapV2</div>
          <div className="subtitle">Subtitle</div>
        </div>
        <Flex className="row" sx={{justifyContent: 'space-between'}}>
          <div className="left">
            <a href="/{API}/Docs">View Docs</a>
          </div>
          <Flex className="right">
            <Flex className="stars">
              <img src="star.svg" className="star" />
              <span>17</span>
            </Flex>
            <button sx={{ml: 2}}>IPFS</button>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

export default Card
