/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import MonacoEditor from 'react-monaco-editor'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  return (
    <div>
      <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5>
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={value}
        options={{
          selectOnLineNumbers: true,
        }}
        onChange={(e) => {
          console.log(e)
        }}
        editorDidMount={(e) => {
          console.log(e)
        }}
      />
    </div>
  )
}

export default GQLCodeBlock
