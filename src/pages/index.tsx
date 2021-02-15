/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import Card from '../components/Card'

const Index = () => {
  const { theme } = useThemeUI()
  return (
    <Layout>
      <main>
        <h1>Browse APIs</h1>
        <div className="content">
          <div className="apis">
            <ul className="grid">
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
              <li>
                <Card />
              </li>
            </ul>
            <ol className="pagination">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ol>
          </div>
          <nav>
            <form>
              <fieldset>
                <input type="text" placeholder="search" />
              </fieldset>
              <fieldset>
                <b>Arrange by:</b>
                <ul className="choices">
                  <li>
                    <label for="HighestRated">Higest Ratedx</label>
                    <input
                      type="radio"
                      id="HighestRated"
                      name="arrange"
                      value="HighestRated"
                    />
                  </li>
                  <li>
                    <label for="MostRecent">Most Recent</label>
                    <input
                      type="radio"
                      id="MostRecent"
                      name="arrange"
                      value="MostRecent"
                    />
                  </li>
                  <li>
                    <label for="Alphabetical">Alphabetical</label>
                    <input
                      type="radio"
                      id="Alphabetical"
                      name="arrange"
                      value="Alphabetical"
                    />
                  </li>
                </ul>
              </fieldset>
            </form>
          </nav>
        </div>
      </main>
    </Layout>
  )
}

export default Index
