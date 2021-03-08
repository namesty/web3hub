/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import ContentNav from '../../components/ContentNav'
import Published from '../../components/tabs/Published'
import Favorites from '../../components/tabs/Favorites'

const UserApis = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(router.query.activeTab as string)
  console.log(activeTab)
  useEffect(() => {
    setActiveTab(router.query.activeTab as string)
  }, [router.query.activeTab])
  return (
    <Layout>
      <Flex>
        <Navbar />
        <main>
          <div className="contents">
            <Header title="My API's" />
            <section className="content">
              <ContentNav
                setActiveTab={setActiveTab}
                activeTab={activeTab}
                tabs={[
                  {
                    label: 'Published',
                    count: 0,
                  },
                  {
                    label: 'Favorites',
                    count: 12,
                  },
                ]}
              />
              <br />
              {activeTab === 'published' && <Published/>}
              {activeTab === 'favorites' && <Favorites />}
            </section>
            <br />
            <br />
            <br />
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default UserApis
