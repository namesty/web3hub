/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx, Button } from 'theme-ui'
import Card from '../components/Card'
import { useRouter } from 'next/router'

const ApiGrid = () => {
  const router = useRouter()
  return (
    <div>
      <Grid
        gap={'3%'}
        sx={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          rowGap: '4%',
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <p
        sx={{
          mt: '5rem',
          fontFamily: 'Montserrat',
          
          fontWeight: 'normal',
          fontSize: '20px',
          lineHeight: '52px',
          textAlign: 'center',
          letterSpacing: '-1px',
          color: '#688184',
        }}
      >
        You reached the end of the list. <b>Don’t stop here!</b>
        <br/>
        <Button
            variant={'primary'}
            onClick={() => {router.push('/apis/create?activeTab=create')}}
            sx={{ display: 'inline-block', ml: 3, mt: 4 }}
          >
            <span>Create New API</span>
          </Button>
      </p>
    </div>
  )
}

export default ApiGrid
