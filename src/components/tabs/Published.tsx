/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button, Styled } from 'theme-ui'
import { useRouter } from 'next/router'

const Published = () => {
  const router = useRouter()
  return (
    <Flex
      className="published"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src="/images/thinking-emoji.svg" alt="thinking"  sx={{mb: 4}}/>
      <Styled.h5
        sx={{
          fontFamily: 'Montserrat',
          
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '28px',
          textAlign: 'center',
          letterSpacing: '-0.01em',
          color: '#688184',
        }}
      >
        Looks like you did not publish an API yet!
      </Styled.h5>
      <Button
        variant={'primary'}
        onClick={() => {
          router.push('/apis/create?activeTab=create')
        }}
        sx={{ display: 'inline-block', ml: 3, p: '1.5rem', px: '2.5rem'}}
      >
        <span>Create New API</span>
      </Button>
    </Flex>
  )
}

export default Published
