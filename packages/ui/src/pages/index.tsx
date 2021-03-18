/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../components/Layout'
import SortNav from '../components/SortNav'
import ApiGrid from '../components/ApiGrid'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BGWave from '../components/BGWave'
import BottomSpace from '../components/BottomSpace'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

const Index = () => {
  // const router = useRouter()
  // const [pageAnimationInFinished, setPageAnimationInFinished] = useState(false)
  // const [pageAnimationOutStarted, setPageAnimationOutStarted] = useState(false)
  // const handlePageAnimationEnd = () => {
  //   if(pageAnimationInFinished === false) {
  //     setPageAnimationInFinished(true)
  //     return
  //   }
  //   if(pageAnimationOutStarted === true) {
  //     router.push('/')
  //   }
  // }
  // useEffect(() => {
  // }, [pageAnimationInFinished])

  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          {/* <div
            className={(pageAnimationOutStarted && 'out')}
            sx={{
              width: '100px',
              height: '100px',
              bg: 'red',
              animation: 'fadeIn 2s',
              '&.out': {
                animation: 'fadeOut 1s',
              },
            }}
            onAnimationEnd={handlePageAnimationEnd}
          /> */}
          <div className="contents animate">
            <Header title="Browse APIs" />
            <section className="content">
              <SortNav />
              <ApiGrid />
            </section>
            <BottomSpace />
          </div>
        </main>
      </Flex>
      <BGWave light />
    </Layout>
  )
}

export default Index
