/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Select } from 'theme-ui'
import Badge from './Badge'
import Stars from './Stars'

const Playground = () => {
  const handleNewQuery = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  const handleShowSchema = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  return (
    <div className="playground">
      <Flex className="header" sx={{ '*': { display: 'flex', alignItems: 'center' }}}>
        <Select>
          <option value="Uniswap">Uniswap</option>
          <option value="YFI">YFI</option>
          <option value="Curve">Curve</option>
          <option value="Filecoin">Filecoin</option>
        </Select>
        <br />
        <br />
        <Flex className="selection-detail">
          <a className="text-nav" href="/uniswap/docs">
            GO TO API PAGE
          </a>
          <br />
          <br />
          <Stars count={320}/>
          <ul className="category-Badges" sx={{ml: 4}}>
            <li>
              <Badge label="ipfs"/>
            </li>
            <li>
              <Badge label="defi"/>
            </li>
            <li>
              <Badge label="amm"/>
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="body">
        <div className="query">
          <Flex className="templates">
            <Select>
              <option value="GetSwap">Get Swap</option>
              <option value="GetSwap">Get Transaction</option>
              <option value="GetSwap">Get History</option>
            </Select>
            <Button variant="primary" onClick={handleNewQuery}>
              New
            </Button>
          </Flex>
          <code>
            <textarea
              onChange={()=>console.log('YO')}
              value="
              mutation {
                swap(token: jfid) {
                  token
                  _timestamp
                  _asset
                  _type
                  _amount
                }
              }
            "
            ></textarea>
          </code>
        </div>
        <div className="result">
          <Flex className="controls"  sx={{ '*': { display: 'flex', alignItems: 'center' }}}>
            <div className="left">
              <Button variant="primary">Run</Button>
              <Button variant="tertiary">Save</Button>
            </div>
            <div className="right">
              <span className="text-nav left-chevron" onClick={handleShowSchema}>
                Show Schema
              </span>
            </div>
          </Flex>
          <code>
            <pre>{`
              "data": {
                "transactions": [
                  {
                    "_amount": "5494500",
                    "_asset": "pBTC",
                    "_timestamp": "1605245034",
                    "_type": "mint",
                    "id": "0x0001c85a114e81b26a2c466bf988d3a5c61f0bc7c9dde34670e1f8b494bad87e-104"
                  }
                ]
              }
            `}</pre>
          </code>
        </div>
      </Flex>
    </div>
  )
}

export default Playground
