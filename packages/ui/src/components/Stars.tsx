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
            : {
                width: '1.125rem',
                height: '1.125rem',
                top: '-0.125rem',
                left: '-0.125rem',
              }
        }
      />
      <div
        className="star-count"
        sx={
          !large
            ? {
                fontWeight: '600',
                fontSize: '0.875rem',
                lineHeight: '1.0625rem',
                color: onDark && 'w3OffWhite',
                ml: 2,
              }
            : {
                fontSize: '1.5rem',
                fontWeight: '700',
                lineHeight: '1.8125rem',
                letterSpacing: '0rem',
              }
        }
      >
        {count}
      </div>
    </Flex>
  )
}

export default Stars
