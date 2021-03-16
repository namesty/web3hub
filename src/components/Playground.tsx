/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Styled } from 'theme-ui'
import Badge from './Badge'
import Stars from './Stars'
import BGWave from '../components/BGWave'
import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox'
import SearchBox from './SearchBox'
import { useStateValue } from '../state/state'

const Playground = () => {
  const [{ dapp }, dispatch] = useStateValue()
  
  // TODO: Turn this into reusable hook because it also exsits on index
  const [searchValues, setsearchValues] = useState([])
  const [searchOptions, setsearchOptions] = useState(dapp.apis)
  
  const [queryValues, setqueryValues] = useState([])
  const [queryOptions, setqueryOptions] = useState([
    {
      id: 'Get Swap',
    },
    {
      id: 'Get Transaction',
    },
    {
      id: 'Get History',
    },
  ])
  const handleNewQuery = (e: React.BaseSyntheticEvent) => console.log(e.target)
  const handleShowSchema = (e: React.BaseSyntheticEvent) => console.log(e.target)
  
  const handleSearchValuesChange = (values) => setsearchValues(values)
  const handleQueryValuesChange = (values) => setqueryValues(values)
  
  // useEffect(() => {
  //   async function getRelatedFunctions() {
  //     let queries = await axios.get(`/api/apis/${searchValues[0].id}/queries`)
  //     setqueryOptions(queries.data)
  //   }
  //   getRelatedFunctions()
  // }, [searchValues])

  useEffect(() => {
    setsearchOptions(dapp.apis)
  }, [dapp.apis])

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
      {searchOptions && searchOptions.length > 0 && (
        <React.Fragment>
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
            <SearchBox
              dark
              searchBy="id"
              placeholder={'Search API’s'}
              labelField="id"
              valueField="id"
              options={searchOptions}
              values={searchValues}
              onChange={handleSearchValuesChange}
            />
            <Flex
              className="selection-detail"
              sx={{
                ml: 4,
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 1,
              }}
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
                <SelectBox
                  dark
                  skinny
                  labelField="id"
                  valueField="id"
                  options={queryOptions}
                  values={queryValues}
                  onChange={handleQueryValuesChange}
                />

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
        </React.Fragment>
      )}
      <BGWave dark />
    </div>
  )
}

export default Playground