/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Editor from '@monaco-editor/react'
import { useRef } from 'react'

// https://github.com/brijeshb42/monaco-themes/tree/master/themes
import solarizedDark from '../theme/Solarized-dark.json'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  const ref = useRef(null)
  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme('solarizedDark', solarizedDark);
    monaco.editor.setTheme('solarizedDark');
  }
  const handleEditorDidMount = () => {
    let triggerCheck = setInterval(() => {
      let foldButton = ref.current.querySelector('.cldr.codicon') as HTMLElement
      if (foldButton !== null) {
        clearInterval(triggerCheck)
        foldButton.click()
      }
    }, 500)
  }
  return (
    <div ref={ref}>
      <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5>
      <Editor
        onMount={handleEditorDidMount}
        theme="solarizedDark"
        options={{
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          readOnly: true
        }}
        beforeMount={handleEditorWillMount}
        height="200px"
        defaultLanguage="graphql"
        defaultValue={value.toString()}
      />
    </div>
  )
}

export default GQLCodeBlock
