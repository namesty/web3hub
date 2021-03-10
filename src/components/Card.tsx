/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import Link from 'next/link'
import Stars from './Stars'
import Badge from './Badge'

const Card = () => {
  return (
    <div
      className="Card"
      sx={{
        width: '270px',
        p: 4,
        boxShadow: '0px 0px 10px 5px #DDD',
        borderRadius: '8px',
        bg: 'white'
      }}
    >
      <Link href="apis/SOMEAPI">
        <a sx={{textDecoration: 'none'}}>
        <div className="wrap-contents">
        <div sx={{ display: 'block', m: 'auto' }}>
          <img
            className="api-logo"
            src="/images/uniswap.png"
            sx={{
              width: '140px',
              height: '140px',
              display: 'block',
              m: 'auto',
            }}
          />
        </div>

        <div className="info">
          <div className="row" sx={{ justifyContent: 'space-between' }}>
            <Styled.h3 className="title" sx={{ textAlign: 'center', my: 2 }}>
              UniswapV2
            </Styled.h3>
            <div className="subtitle" sx={{ textAlign: 'center', my: 2, mb: 3 }}>
              Historical data and analytics for Uniswap V2
            </div>
            <Flex sx={{ alignItems: 'center', m: 'auto', justifyContent: 'center' }}>
              <Stars count={320} />
              <div
                sx={{
                  width: '2px',
                  height: '30px',
                  bg: 'darkGreen',
                  opacity: '.1',
                  mx: 3,
                }}
              />
              <Flex sx={{ alignItems: 'center', cursor: 'default' }}>
                <img
                  src="/images/doc.svg"
                  alt="docs"
                  sx={{ mr: 2, width: '13px', height: '16px', top: '-2px' }}
                />
                <b>Docs</b>
              </Flex>
            </Flex>
            <ul
              className="category-Badges"
              sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
            >
              <li>
                <Badge label="ipfs" />
              </li>
              <li>
                <Badge label="defi" />
              </li>
              <li>
                <Badge label="amm" />
              </li>
            </ul>
          </div>
        </div>
      </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
