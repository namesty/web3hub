/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

type BadgeProps = {
  count: number
  onDark?: boolean
  large?: boolean
}

const Stars = ({ count, onDark, large }: BadgeProps) => {
  return (
    <Flex className="stars" sx={{ cursor: 'default', alignItems: 'center' }}>
      <img
        className="star"
        src="/images/star.svg"
        sx={
          !large
            ? { width: 'auto' }
            : { width: '18px', height: '18px', top: '-2px', left: '-2px' }
        }
      />
      <div
        className="star-count"
        sx={
          !large
            ? {
                
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '17px',
                color: onDark && 'offWhite',
                ml: 2,
              }
            : {
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '29px',
                letterSpacing: '0px',
              }
        }
      >
        {count}
      </div>
    </Flex>
  )
}

export default Stars
