/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx } from 'theme-ui'
import Card from '../components/Card'

const ApiGrid = () => {
  return (
    <Grid
      gap={'3.3333333333%'}
      sx={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 270px))',
        rowGap: '2rem'
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
  )
}

export default ApiGrid
