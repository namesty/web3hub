/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Select } from 'theme-ui'

const SortNav = () => {
  return (
    <nav>
      <form sx={{display: 'flex', justifyContent: 'space-between'}}>
        <fieldset>
          <Input type="text" placeholder="search" sx={{ width: 8}}/>
        </fieldset>
        <fieldset>
          <Select sx={{minWidth: '150px'}}>
            <option value="HighestRated">Higest Rated</option>
            <option value="MostRecent">Most Recent</option>
            <option value="Alphabetical">Alphabetical</option>
          </Select>
        </fieldset>
      </form>
    </nav>
  )
}

export default SortNav
