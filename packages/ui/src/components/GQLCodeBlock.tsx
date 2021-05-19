/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import dynamic from 'next/dynamic'
const MonacoEditor = dynamic(import('react-monaco-editor'), { ssr: false })

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  return (
    <div>
      {/* <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5> */}
      <MonacoEditor
        height={'600px'}
        language="typescript"
        theme="vs-dark"
        value={value}
        onChange={console.log}
        editorDidMount={() => {
          window.MonacoEnvironment.getWorkerUrl = (moduleId, label) => {
            if (label === 'json') return '/_next/static/json.worker.js'
            if (label === 'css') return '/_next/static/css.worker.js'
            if (label === 'html') return '/_next/static/html.worker.js'
            if (label === 'typescript' || label === 'javascript')
              return '/_next/static/ts.worker.js'
            return '/_next/static/editor.worker.js'
          }
        }}
      />
    </div>
  )
}

export default GQLCodeBlock
