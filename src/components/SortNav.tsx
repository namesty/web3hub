/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

const SortNav = () => {
  return (
    <nav>
      <form>
        <fieldset>
          <input type="text" placeholder="search" />
        </fieldset>
        <fieldset>
          <b>Arrange by:</b>
          <ul className="choices" sx={{ 'label, input': { cursor: 'pointer'}}}>
            <li>
              <label htmlFor="HighestRated">Higest Rated</label>
              <input type="radio" id="HighestRated" name="arrange" value="HighestRated" />
            </li>
            <li>
              <label htmlFor="MostRecent">Most Recent</label>
              <input type="radio" id="MostRecent" name="arrange" value="MostRecent" />
            </li>
            <li>
              <label htmlFor="Alphabetical">Alphabetical</label>
              <input type="radio" id="Alphabetical" name="arrange" value="Alphabetical" />
            </li>
          </ul>
        </fieldset>
      </form>
    </nav>
  )
}

export default SortNav
