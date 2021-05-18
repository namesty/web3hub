/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import 'prism-solarized-dark/prism-solarizeddark.css'
import Prism from 'prismjs'
import 'prismjs/components/prism-graphql'
import React, { useEffect, useRef } from 'react'

type GQLCodeBlockProps = {
  title: string
  value: any
}

const nextElementUntil = function (elem, selector, filter) {
  const siblings = []
  elem = elem.nextElementSibling
  while (elem) {
    if (elem.matches(selector)) break
    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling
      continue
    }
    siblings.push(elem)
    elem = elem.nextElementSibling
  }
  return siblings
}

const GQLCodeBlock = ({ title, value }: GQLCodeBlockProps) => {
  const codeEl = useRef(null)

  // Do Syntax highlight
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAllUnder(codeEl.current)
    }
  }, [])

  // Inject collapse btns and start marker
  useEffect(() => {
    setTimeout(() => {
      let importsElement: any = Array.from(
        codeEl.current.querySelectorAll(`.token.directive.function`),
      ).find((el: any) => el.textContent.includes('@import'))
      if (importsElement) {
        let marker = document.createElement('span')
        let btn = document.createElement('button')
        marker.className = 'start-marker'
        btn.textContent = '-'
        btn.className = 'type-toggle'
        importsElement.before(btn)
        importsElement.after(marker)
      }
    }, 1000)
  }, [])

  // Inject end marker
  useEffect(() => {
    setTimeout(() => {
    let closeParenElement: any = Array.from(
      codeEl.current.querySelectorAll(`.token.punctuation`),
    ).filter((el: any) => el.textContent === ')')[0]
    console.log(closeParenElement)
    if (closeParenElement) {
      let marker = document.createElement('span')
      marker.className = 'end-marker'
      marker.textContent = ''
      closeParenElement.after(marker)
    }
  },1100)
  }, [])

  // Buttin toggle
  useEffect(() => {
    setTimeout(() => {
      let btn = codeEl.current.querySelector(`.type-toggle`)
      if (btn !== null) {
        btn.addEventListener('click', () => {
          const start = codeEl.current.querySelector('.start-marker')
          const inbetweenEls = nextElementUntil(start, '.end-marker', null)
          inbetweenEls.map((el) => {
            if (el.classList.contains('hidden')) {
              el.classList.remove('hidden')
              btn.innerHTML = '-'
            } else {
              el.classList.add('hidden')
              btn.innerHTML = '+'
            }
          })
        })
      }
    }, 1200)
  }, [])

  return (
    <div
      sx={{
        "code[class*='language-'], pre[class*='language-']": {
          fontSize: '12px',
          lineHeight: 1.2,
          borderRadius: 0,
          mb: 0,
        },
        '.type-toggle': {
          color: 'white',
          background: '#333',
          border: 'none',
          borderRadius: '4px',
          mr: 1,
        },
        '.hidden': {
          display: 'none',
        },
        button: {
          width: '20px'
        },
        code: {
          // display: inline-block
          // white-space: initial;
        }
      }}
    >
      <Styled.h5 sx={{ m: 0, py: 2, bg: 'white' }}>{title}</Styled.h5>
      <pre className="language-graphql">
        <code ref={codeEl}>
          {value.map((item) => {
            return item + '\n\n'
          })}
        </code>
      </pre>
    </div>
  )
}

export default GQLCodeBlock
