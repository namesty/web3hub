/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import BGWave from '../components/BGWave'
import { useStateValue } from '../state/state'

const Signin = () => {
  const [, dispatch] = useStateValue()
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      if (router.query.code) {
        const response = await axios.get(
          `http://localhost:3001/auth/github/callback/${router.query.code}`,
        )

        if ('access_token' in response.data) {
          console.log('Access token: ', response.data.access_token)
          dispatch({
            type: 'SET_GITHUB_USER',
            payload: response.data.access_token.access_token,
          })
        }
        // router.push('/')
      }
    })()
  }, [router.query])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <section className="content">
              <Styled.h1>Signing In...</Styled.h1>
            </section>
          </div>
        </main>
      </Flex>
      <BGWave light />
    </Layout>
  )
}

export default Signin
