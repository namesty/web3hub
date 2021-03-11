/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Select, Field, Styled } from 'theme-ui'
import Badge from './Badge'
import Stars from './Stars'
import BGWave from '../components/BGWave'
import axios from 'axios'
import { useEffect, useState } from 'react'
import RDS from 'react-dropdown-select'

const Playground = () => {
  const [searchValues, setsearchValues] = useState([])
  const [searchOptions, setsearchOptions] = useState([])
  const handleNewQuery = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  const handleShowSchema = (e: React.BaseSyntheticEvent) => {
    console.log(e.target)
  }
  const handleSearchValuesChange = (values) => {
    setsearchValues(values)
  }
  useEffect(() => {
    async function getAPIs() {
      let search = await axios.get('/api/apis')
      setsearchOptions(search.data)
    }
    getAPIs()
  }, [])

  console.log(searchOptions)
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
          lineHeight: '14px',
        },
      }}
    >
      <Flex
        className="header"
        sx={{
          p: '1.5rem',
          backgroundColor: 'w3gray',
          '*': { display: 'flex' },
          label: {
            display: 'none',
          },
        }}
      >
        {searchOptions.length === 0 && (
          <Field
            label="test"
            name="api-search"
            placeholder={'Search API’s'}
            sx={{
              width: '20rem',
              border: ' 2px solid #688184',
              color: '#688184',
              bg: '#13212C',
              p: '10px',
              px: '13px',
              fontFamily: 'Istok Web',
              fontSize: '14px',
              lineHeight: '150%',
              borderRadius: '8px',
              height: '38px'
            }}
          />
        )}
        {searchOptions.length > 0 && (
          <RDS
            sx={{
              width: '20rem',
              border: ' 2px solid #688184',
              color: '#688184',
              bg: '#13212C',
              p: '8px',
              borderRadius: '8px',
              '&:hover, &:focus-within': {
                borderColor: '#688184',
                boxShadow: 'none',
              },
              '.react-dropdown-select-input': {
                color: '#688184',
                fontFamily: 'Istok Web',
                fontSize: '14px',
                lineHeight: '100%',
              },
              '.react-dropdown-select-clear': {
                fontSize: '25px',
                top: '-2px',
                right: '-6px',
              },
              '.react-dropdown-select-dropdown': {
                top: '36px',
                bg: '#13212C',
                color: 'white',
                border: '2px solid #688184',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
              },
              '.react-dropdown-select-item': {
                borderColor: '#688184',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '14px',
                color: '#FFFFFF',
                padding: '8px 16px',
              }
            }}
            searchBy="id"
            searchable
            clearable
            keepSelectedInList
            labelField="id"
            valueField="id"
            placeholder={'Search API’s'}
            dropdownHandle={false}
            options={searchOptions}
            values={searchValues}
            onChange={handleSearchValuesChange}
          />
        )}

        <Flex
          className="selection-detail"
          sx={{ ml: 4, alignItems: 'center', justifyContent: 'space-between', flex: 1 }}
        >
          <div className="left">
            <Stars count={320} onDark />
            <ul className="category-Badges" sx={{ ml: 3 }}>
              <li>
                <Badge label="IPFS" onDark />
              </li>
            </ul>
          </div>
          <div className="right">
            <a className="text-nav" href="/uniswap/docs">
              GO TO API PAGE
            </a>
          </div>
        </Flex>
      </Flex>
      <Flex className="body" sx={{ '> *': { p: '1.5rem' } }}>
        <div className="query" sx={{ flex: 4, backgroundColor: 'navy' }}>
          <Flex
            className="templates"
            sx={{ flex: 1, mb: 4, justifyContent: 'space-between' }}
          >
            <Select sx={{ border: '2px solid babyBlue', color: 'white', width: '280px' }}>
              <option value="GetSwap">Get Swap</option>
              <option value="GetSwap">Get Transaction</option>
              <option value="GetSwap">Get History</option>
            </Select>
            <Button variant="secondary" onClick={handleNewQuery}>
              New
            </Button>
          </Flex>
          <Styled.code>
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
    }xw
  }
            `}
            ></textarea>
          </Styled.code>
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
              <span
                className="text-nav left-chevron"
                onClick={handleShowSchema}
                sx={{ cursor: 'pointer' }}
              >
                <span sx={{ fontSize: '2.5rem', pr: '1rem' }}>‹</span> Show Schema
              </span>
            </div>
          </Flex>
          <Styled.code sx={{ overflowX: 'scroll' }}>
            <Styled.pre>{`
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
            `}</Styled.pre>
          </Styled.code>
        </div>
      </Flex>
      <BGWave dark />
    </div>
  )
}

export default Playground
