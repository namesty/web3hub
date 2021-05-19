/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import dynamic from 'next/dynamic'

import Editor from '@monaco-editor/react'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  return (
    <div sx={{
      '.minimap': {
        display: 'none'
      }
    }}>
      <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5>
      <Editor height="150px" defaultLanguage="graphql" defaultValue={`
type Query @imports(
  types: [ "Ethereum_Query" ] 
) {
    getData( address: String! ): UInt32!
  }
`} />
    </div>
  )
}

export default GQLCodeBlock
