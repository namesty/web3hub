/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const Pagination = () => {
  return (
    <Flex className="pagination" sx={{flex: 1, justifyContent: 'center', my: 5}}>
      <a href="#">{'<'}</a>
      <ol sx={{display: 'flex', '*': {mx: 1}}}>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li>...</li>
        <li><a href="#">20</a></li>
        <li><a href="#">21</a></li>
        <li><a href="#">22</a></li>
      </ol>
      <a href="#">{'>'}</a>
    </Flex>
  )
}

export default Pagination
