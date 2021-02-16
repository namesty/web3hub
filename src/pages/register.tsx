/** @jsxRuntime classic */
/** @jsx jsx */
import { normalizeConfig } from 'next/dist/next-server/server/config'
import { useState } from 'react'
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import Layout from '../components/Layout'
import CreateAPI from '../components/tabs/CreateAPI'
import PublishAPI from '../components/tabs/PublishAPI'

const CreateApi = () => {
  const { theme } = useThemeUI()
  const [tab, setTab] = useState('Create')
  const handleTabClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation()
    setTab(e.target.classList[0])
  }
  return (
    <Layout>
      <main>
        <Flex className="tabs" onClick={handleTabClick} sx={{ '*': { cursor: 'pointer'}}}>
          <div
            className="create"
            sx={{ fontWeight: tab === 'create' ? 'bold' : 'body' }}
          >
            Create
          </div>
          <div
            className="publish"
            sx={{ fontWeight: tab === 'publish' ? 'bold' : 'body' }}
          >
            Publish
          </div>
        </Flex>
        <div className="content">
          {tab === 'create' && <CreateAPI/>}
          {tab === 'publish' && <PublishAPI/>}
        </div>
      </main>
    </Layout>
  )
}

export default CreateApi
