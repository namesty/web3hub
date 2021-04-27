/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Layout from '../../../components/Layout'
import Navbar from '../../../components/Navbar'
import Header from '../../../components/Header'
import BottomSpace from '../../../components/BottomSpace'
import { useRouter } from 'next/router'
import APIDetail from '../../../components/APIDetail'
import { useEffect, useState } from 'react'
import axios from 'axios'
const ApiView = () => {
  const router = useRouter()
  const [apiData, setapiData] = useState()
  // useEffect(() => {
  //   ;(async () => {
  //     const { data: apiData } = await axios.get(
  //       `http://localhost:3001/apis/ens/${router.asPath.split('/apis/ens/')[1]}`,
  //     )
  //     setapiData(apiData)
  //   })()
  // }, [])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header backNav={`Browse API's`} />
            <APIDetail api={apiData} />
            <BottomSpace />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default ApiView
