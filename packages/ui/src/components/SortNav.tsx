/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Select } from 'theme-ui'
import { useState, useEffect } from 'react'
import { useStateValue } from '../state/state'
import SearchBox from './SearchBox'

const SortNav = () => {
  const [{ dapp }, dispatch] = useStateValue()

  // TODO: Turn this into reusable hook because it also exsits on playground
  const [searchValues, setsearchValues] = useState([])
  const [searchOptions, setsearchOptions] = useState(dapp.apis)
  const handleSearchValuesChange = (values) => setsearchValues(values)

  useEffect(() => {
    setsearchOptions(dapp.apis)
  }, [dapp.apis])
  

  return (
    <nav>
      <form>
        {dapp.apis && dapp.apis.length > 0 && (
          <SearchBox
            detachedResults
            large
            searchBy="id"
            placeholder={'Search'}
            labelField="id"
            valueField="id"
            options={searchOptions}
            values={searchValues}
            onChange={handleSearchValuesChange}
          />
        )}

        <br />
        <Flex
          sx={{
            justifyContent: 'space-between',
            flex: 1,
            alignItems: 'center',
            color: 'w3darkGreen',
            fontFamily: 'Montserrat',
            fontSize: '0.9375rem',
            fontWeight: '500',
            lineHeight: '1.125rem',
            letterSpacing: '-0.025rem',
            textAlign: 'right',
            pb: 2
          }}
        >
          <span>
            <b>46</b>&nbsp;API's
          </span>
          <div>
            <Select sx={{ minWidth: '8rem', border: 'none' }}>
              <option value="HighestRated">Higest Rated</option>
              <option value="MostRecent">Most Recent</option>
              <option value="Alphabetical">Alphabetical</option>
            </Select>
          </div>
        </Flex>
      </form>
    </nav>
  )
}

export default SortNav
