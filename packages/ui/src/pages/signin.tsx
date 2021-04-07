/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { useRouter } from 'next/router'
import { useStateValue } from '../state/state'
import { useEffect } from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import BGWave from '../components/BGWave'

const Signin = () => {
  const [, dispatch] = useStateValue()
  const router = useRouter()
  useEffect(() => {
    dispatch({
      type: 'SET_GITHUB_USER',
      payload: router.query.code,
    })
    router.push('/')
  }, [])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <section className="content">
              <Styled.h1>
                Signing In...
              </Styled.h1>
            </section>
          </div>
        </main>
      </Flex>
      <BGWave light />
    </Layout>
  )
}

export default Signin
