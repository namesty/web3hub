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
  const [apiDataRes, setapiDataRes] = useState(null)
  useEffect(() => {
    async function fetchApiDetails() {
      if(router.query.view !== undefined) {
        const { data: apiData } = await axios.get(
          `http://localhost:3001/apis/find/ens/${router.query.view}`,
        )
        console.log(apiData)
        setapiDataRes(apiData.api)
      }
    }
    fetchApiDetails()
  }, [router.query.view])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header backNav={`Browse API's`} />
            {apiDataRes !== null && <APIDetail api={apiDataRes} />}
            <BottomSpace />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default ApiView
