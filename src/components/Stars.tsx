/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

type BadgeProps = {
  count: number
  onDark?: boolean
}
const Stars = ({ count, onDark }: BadgeProps) => {
  return (
    <Flex className="stars" sx={{cursor: 'default', alignItems: 'center'}}>
      <img className="star" src="images/star.svg" sx={{top: '-2px'}}/>
      <div
        className="star-count"
        sx={{
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '17px',
          color: onDark && 'offWhite',
          ml: 2 
        }}
      >
        {count}
      </div>
    </Flex>
  )
}

export default Stars
