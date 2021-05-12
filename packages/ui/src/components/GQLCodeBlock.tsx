/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import 'prism-solarized-dark/prism-solarizeddark.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-graphql'
import { useEffect } from 'react'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])
  return (
    <div
      sx={{
        "code[class*='language-'], pre[class*='language-']": {
          fontSize: '12px',
          lineHeight: 1.2,
          borderRadius: 0,
          mb: 0
        },
      }}
    >
      <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5>
      <pre className="language-graphql">
        <code>
          {value.map((item, idx) => {
            return item + '\n\n'
          })}
        </code>
      </pre>
    </div>
  )
}

export default GQLCodeBlock
