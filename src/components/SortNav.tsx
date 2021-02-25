/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Select } from 'theme-ui'

const SortNav = () => {
  return (
    <nav>
      <form sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
        <fieldset>
          <Input type="text" placeholder="Search" sx={{ width: 8, p: 3 }}/>
        </fieldset>
        <fieldset>
          <Select sx={{minWidth: '150px', border: 'none', color: 'w3lightTeal'}}>
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
