/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BGWave from '../components/BGWave'
import BottomSpace from '../components/BottomSpace'

const Buttons = () => {
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents animate">
            <Header title="Button Test" />
            <hr />
            <h1>NEW BUTTONS</h1>
            <section>
              <Flex sx={{justifyContent: 'space-between'}}>
                <div>
                  <Button variant="primarySmall">primarySmall</Button>
                  <br/>
                  <Button variant="primaryMedium">primaryMedium</Button>
                  <br/>
                  <Button variant="primaryLarge">primaryLarge</Button>
                  <br/>
                </div>
                <div>
                  <Button variant="secondarySmall">secondarySmall</Button>
                  <br/>
                  <Button variant="secondaryMedium">secondaryMedium</Button>
                  <br/>
                  <Button variant="secondaryLarge">secondaryLarge</Button>
                  <br/>
                </div>
                <div>
                  <Button variant="calloutSmall">calloutSmall</Button>
                  <br/>
                  <Button variant="calloutMedium">calloutMedium</Button>
                  <br/>
                  <Button variant="calloutLarge">calloutLarge</Button>
                  <br/>
                </div>
                <div>
                  <Button variant="hollowSmall">hollowSmall</Button>
                  <br/>
                  <Button variant="hollowMedium">hollowMedium</Button>
                  <br/>
                  <Button variant="hollowLarge">hollowLarge</Button>
                  <br/>
                </div>
              </Flex>
            </section>
            <BottomSpace />
          </div>
        </main>
      </Flex>
      <BGWave light />
    </Layout>
  )
}

export default Buttons
