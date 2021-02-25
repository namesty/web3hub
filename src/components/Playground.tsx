/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Select, useThemeUI } from 'theme-ui'
import Badge from './Badge'
import Stars from './Stars'

const Playground = () => {
  const theme = useThemeUI()
  const handleNewQuery = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  const handleShowSchema = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  return (
    <div
      className="playground"
      sx={{
        backgroundColor: 'w3gray',
        borderRadius: '16px',
        overflow: 'hidden',
        'code, pre, textarea': {
          color: 'softBlue',
          backgroundColor: 'transparent !important',
          border: 'none',
          fontSize: '14px',
          lineHeight: '14px'
        },
      }}
    >
      <Flex
        className="header"
        sx={{
          p: '1.5rem',
          backgroundColor: 'w3gray',
          '*': { display: 'flex', alignItems: 'center' },
        }}
      >
        <Select sx={{   
          ...theme.theme.forms.select.dark,
          width: '20rem'
        }}>
          <option value="Uniswap">Uniswap</option>
          <option value="YFI">YFI</option>
          <option value="Curve">Curve</option>
          <option value="Filecoin">Filecoin</option>
        </Select>
        <Flex className="selection-detail" sx={{ ml: 4 }}>
          <a className="text-nav" href="/uniswap/docs" sx={{ mr: 5 }}>
            GO TO API PAGE
          </a>
          <Stars count={320} onDark/>
          <ul className="category-Badges" sx={{ ml: 4 }}>
            <li>
              <Badge label="ipfs" />
            </li>
            <li>
              <Badge label="defi" />
            </li>
            <li>
              <Badge label="amm" />
            </li>
          </ul>
        </Flex>
      </Flex>
      <Flex className="body" sx={{ '> *': { p: '1.5rem' } }}>
        <div className="query" sx={{ flex: 4, backgroundColor: 'navy' }}>
          <Flex
            className="templates"
            sx={{ flex: 1, mb: 4, justifyContent: 'space-between' }}
          >
            <Select sx={{...theme.theme.forms.select.dark, width: '280px'}}>
              <option value="GetSwap">Get Swap</option>
              <option value="GetSwap">Get Transaction</option>
              <option value="GetSwap">Get History</option>
            </Select>
            <Button variant="secondary" onClick={handleNewQuery}>
              New
            </Button>
          </Flex>
          <code>
            <textarea
              onChange={() => console.log('YO')}
              sx={{ resize: 'none', width: '100%', height: '350px' }}
              value={`
  mutation {
    swap(token: jfid) {
      token
      _timestamp
      _asset
      _type
      _amount
    }
  }
            `}
            ></textarea>
          </code>
        </div>
        &nbsp;
        <div className="result" sx={{ flex: 6, backgroundColor: 'navy' }}>
          <Flex
            className="controls"
            sx={{
              justifyContent: 'space-between',
              mb: 4,
              '*': { display: 'flex', alignItems: 'center' },
            }}
          >
            <div className="left">
              <Button variant="primary">Run</Button>
              <Button variant="tertiary">Save</Button>
            </div>
            <div className="right">
              <span className="text-nav left-chevron" onClick={handleShowSchema} sx={{cursor: 'pointer'}}>
                <span sx={{ fontSize: '2.5rem', pr: '1rem' }}>‹</span> Show Schema
              </span>
            </div>
          </Flex>
          <code sx={{ overflowX: 'scroll' }}>
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
