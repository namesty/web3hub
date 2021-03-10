/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Flex, Select } from 'theme-ui'

const SortNav = () => {
  return (
    <nav>
      <form>
        <Input
          type="text"
          placeholder="Search"
          sx={{
            flex: 1,
            width: '100%',
            p: 3,
            bg: '#EFF5F4',
            mixBlendMode: 'normal',
            borderRadius: '8px',
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '18px',
            letterSpacing: '-0.4px',
            color: '#598188',
            borderColor: 'transparent',
          }}
        />
        <br />
        <Flex sx={{ justifyContent: 'space-between', flex: 1, alignItems: 'center' }}>
          <span>
            <b>46</b>API's
          </span>
          <div>
            <Select sx={{ minWidth: '150px', border: 'none', color: 'w3lightTeal' }}>
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
