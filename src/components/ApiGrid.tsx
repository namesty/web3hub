/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx } from 'theme-ui'
import Card from '../components/Card'

const ApiGrid = () => {
  return (
    <Grid gap={4} columns={[ 1, 2, 3 ]}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </Grid>
  )
}

export default ApiGrid
