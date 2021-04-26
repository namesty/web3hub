/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import Header from '../../../components/Header'
import BottomSpace from '../../../components/BottomSpace'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'
import APIDetail from '../../../components/APIDetail'

const ApiView = () => {
  const router = useRouter()
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header backNav={`Browse API's`} />
            <APIDetail/>
            <BottomSpace />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default ApiView