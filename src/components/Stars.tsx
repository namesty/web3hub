/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

type BadgeProps = {
  count: number
}
const Stars = ({ count }: BadgeProps) => {
  return (
    <Flex className="stars">
      <img className="star" src="images/star.svg" />
      <div
        className="star-count"
        sx={{
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '17px',
          color: 'offWhite',
          ml: 2 
        }}
      >
        {count}
      </div>
    </Flex>
  )
}

export default Stars
