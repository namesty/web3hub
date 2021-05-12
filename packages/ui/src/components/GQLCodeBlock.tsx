/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import 'prism-solarized-dark/prism-solarizeddark.css'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const GQLCodeBlock = ({title, value}: GQLCodeBlockProps) => {
  return (
    <div>
      <Styled.h5 sx={{mb: 0}}>{title}</Styled.h5>
      <pre className="language-graphql">
        <code>
          {value.map((item, idx) => {
            return item + '\n\n'
          })}
        </code>
      </pre>
      <style key='font-fix-prism'>{`
        code[class*="language-"], pre[class*="language-"] {
          font-size: 12px;
          line-height: 1.2;
        }
      `}</style>
    </div>
  )
}

export default GQLCodeBlock