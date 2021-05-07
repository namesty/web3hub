/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Styled } from 'theme-ui'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useStateValue } from '../state/state'
import { cloudFlareGateway } from '../constants'
import get_CFG_UI_DOM from '../utils/get_CFG_UI_DOM'

import Badge from './Badge'
import Stars from './Stars'
import BGWave from './BGWave'
import SelectBox from './SelectBox'
import SearchBox from './SearchBox'

type PlaygroundProps = {
  api?: any
}

const Playground = ({ api }: PlaygroundProps) => {
  const [{ dapp }] = useStateValue()
  const router = useRouter()
  const [searchOptions, setsearchOptions] = useState(dapp.apis)
  const [methods, setMethods] = useState<any>({})
  const [selectedMethod, setSelectMethod] = useState<any>(
    Object.entries(methods)[0] || '',
  )
  const [loadingqueries, setloadingqueries] = useState(false)
  const handleShowSchema = (e: React.BaseSyntheticEvent) => console.log('TODO')
  const handleQueryValuesChange = (method) => setSelectMethod(method[0].value)

  useEffect(() => {
    async function getPackageQueries() {
      let $ = await get_CFG_UI_DOM(api, '/meta/queries')
      let queries = Array.from($('table tr td:nth-child(2) a'))
      queries.shift() // dump .. in row 1
      let methodsList = []
      await queries.map((row: any) => {
        async function getMethods() {
          let queryData = await axios.get(
            `${cloudFlareGateway.replace('/ipfs/', '')}${row.attribs.href}`,
          )
          let key = row.attribs.href.split('meta/queries/')[1].split('.graphql')[0]
          methodsList.push({ id: key, value: queryData.data })
        }
        getMethods()
      })
      setMethods(methodsList)
      setloadingqueries(false)
    }
    if (router.asPath.includes('ens/')) {
      setloadingqueries(true)
      getPackageQueries()
    } else {
    }
  }, [])

  useEffect(() => {
    setsearchOptions(dapp.apis)
  }, [dapp.apis])

  return (
    <div
      className="playground"
      sx={{
        backgroundColor: 'w3shade3',
        borderRadius: '1rem',
        overflow: 'hidden',
        'code, pre, textarea': {
          color: 'w3PlaygroundSoftBlue',
          backgroundColor: 'transparent !important',
          border: 'none',
          fontSize: '0.875rem',
          lineHeight: '0.875rem',
        },
      }}
    >
      {searchOptions && searchOptions.length > 0 && (
        <React.Fragment>
          <Flex
            className="header"
            sx={{
              p: '1.5rem',
              backgroundColor: 'w3shade2',
              '*': { display: 'flex' },
              label: {
                display: 'none',
              },
            }}
          >
            <SearchBox
              dark
              searchBy="name"
              placeholder={'Search API’s'}
              labelField="name"
              valueField="name"
              options={searchOptions}
              onChange={() => {
                console.log('TODO')
              }}
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
                <Stars count={0} onDark />
                <ul className="category-Badges" sx={{ ml: 3 }}>
                  <li>
                    <Badge label="IPFS" onDark />
                  </li>
                </ul>
              </div>
              <div className="right">
                <a
                  className="text-nav"
                  href={router.asPath.replace('playground', 'apis')}
                >
                  GO TO API PAGE
                </a>
              </div>
            </Flex>
          </Flex>
          <Flex className="body" sx={{ '> *': { p: '1.5rem' } }}>
            <div
              className="query"
              sx={{ width: '40%', backgroundColor: 'w3PlayGroundNavy' }}
            >
              <Flex
                className="templates"
                sx={{ flex: 1, mb: 4, justifyContent: 'space-between' }}
              >
                {loadingqueries && ('Loading Methods...')}
                {!loadingqueries && (
                  <SelectBox
                    dark
                    skinny
                    labelField="id"
                    valueField="id"
                    options={methods}
                    onChange={handleQueryValuesChange}
                  />
                )}
              </Flex>
              <Styled.code>
                <textarea
                  onChange={() => console.log('TODO')}
                  sx={{ resize: 'none', width: '100%', height: '21.875rem' }}
                  value={selectedMethod}
                ></textarea>
              </Styled.code>
            </div>
            &nbsp;
            <div
              className="result"
              sx={{
                width: '60%',
                backgroundColor: 'w3PlayGroundNavy',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Flex
                className="controls"
                sx={{
                  justifyContent: 'space-between',
                  mb: 2,
                  '*': { display: 'flex', alignItems: 'center' },
                }}
              >
                <div className="left">
                  <Button variant="primarySmall">Run</Button>
                  <Button variant="hollowSmall">Save</Button>
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
              <Styled.code sx={{ flex: 1 }}>
                <Styled.pre sx={{ height: '100%' }}>{`
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
