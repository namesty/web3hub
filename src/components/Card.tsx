/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import Link from 'next/link'

const Card = () => {
  return (
    <div className="Card">
      <div className="wrap-contents">
        <Link href="apis/SOMEAPI">
          <a>
            <img
              className="api-logo"
              src="APILOGO.svg"
              sx={{ backgroundColor: 'gray', width: '270px', height: '270px' }}
            />
          </a>
        </Link>
        <div className="info">
          <Flex className="row" sx={{ justifyContent: 'space-between' }}>
            <div className="left">
              <div className="title">
                <b>UniswapV2</b>
              </div>
              <div className="subtitle">Subtitle</div>
            </div>
            <Flex className="right" sx={{ alignItems: 'center' }}>
              <Flex className="stars">
                <img src="/images/star-gray.svg" className="star" />
                <span>17</span>
              </Flex>
              <Button
                sx={{
                  ml: 2,
                  background: 'black',
                  border: 'none',
                  py: 1,
                  color: 'white',
                }}
              >
                IPFS
              </Button>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  )
}

export default Card
