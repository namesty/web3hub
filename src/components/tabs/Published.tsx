/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Input, Flex, Select, Button, Styled, Field} from 'theme-ui'
import { useRouter } from 'next/router'

const Published = () => {
  const router = useRouter()
  return (
    <Flex className="published" sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img src="/images/thinking-emoji.svg" alt="thinking"/>
      <h5 sx={{color: 'w3teal'}}>Looks like you did not publish an API yet!</h5>
      <Button
        variant={'primary'}
        onClick={() => {
          router.push('/apis/create?activeTab=create')
        }}
        sx={{ display: 'inline-block', ml: 3 }}
      >
        <span>Create API</span>
      </Button>
    </Flex>
  )
}

export default Published
