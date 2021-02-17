/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import CreateAPI from '../../components/tabs/CreateAPI'
import PublishAPI from '../../components/tabs/PublishAPI'
import { useRouter } from 'next/router'

const CreateApi = () => {
  const { theme } = useThemeUI()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(router.query.activeTab)
  const handleTabClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation()
    setActiveTab(e.target.classList[1])
  }
  useEffect(() => {
    setActiveTab(router.query.activeTab)
  }, [router.query.activeTab])
  return (
    <Layout>
      <main sx={{ maxWidth: '766px', m: 'auto' }}>
        <Flex
          className="tabs"
          onClick={handleTabClick}
          sx={{
            '*': { cursor: 'pointer', mr: 2, mb: 4 },
            '.tab': {
              fontWeight: 'normal',
              '&.active': {
                fontWeight: 'bold',
              },
            },
          }}
        >
          <h3 className={'tab create ' + (activeTab === 'create' ? 'active' : '')}>
            Create
          </h3>
          <h3 className={'tab publish ' + (activeTab === 'publish' ? 'active' : '')}>
            Publish
          </h3>
        </Flex>
        <div className="content">
          {activeTab === 'create' && <CreateAPI />}
          {activeTab === 'publish' && <PublishAPI />}
        </div>
      </main>
    </Layout>
  )
}

export default CreateApi
