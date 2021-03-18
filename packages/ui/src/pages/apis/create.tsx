/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { jsx, Flex, Styled } from 'theme-ui'
import Layout from '../../components/Layout'
import CreateAPI from '../../components/tabs/CreateAPI'
import PublishAPI from '../../components/tabs/PublishAPI'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import BottomSpace from '../../components/BottomSpace'

const CreateApi = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(router.query.activeTab)
  const [modalOpen, setmodalOpen] = useState(false)
  const handleTabClick = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation()
    setActiveTab(e.target.classList[1])
  }
  useEffect(() => {
    setActiveTab(router.query.activeTab)
  }, [router.query.activeTab])
  return (
    <Layout>
      <Flex>
        <main sx={{ pb: 5 }}>
          {modalOpen && (
            <Modal
              screen="success"
              close={() => {
                setmodalOpen(false)
              }}
            />
          )}
          <div className="contents" sx={{ maxWidth: 'calc(1224px + 112px)' }}>
            <Header
              title={activeTab === 'create' ? 'Create a Web3API Package' : 'Publish'}
            />
            <Flex
              className="tabs"
              onClick={handleTabClick}
              sx={{
                '*': { cursor: 'pointer', mr: 2, mb: 4 },
                '.tab': {
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  lineHeight: '20px',
                  letterSpacing: '-0.4000000059604645px',
                  pb: ' 18px',
                  color: 'text',
                  mb: 0,
                  '&.active': {
                    fontWeight: 'bold',
                    color: 'w3darkGreen',
                    borderBottom: '2px solid',
                    borderBottomColor: 'w3NavNeonHighlightTeal',
                    '&:hover': {
                      borderBottom: '2px solid',
                      borderBottomColor: 'w3NavNeonHighlightTeal',
                    },
                  },
                  '&:hover': {
                    borderBottom: '2px solid',
                    borderBottomColor: 'background',
                  },
                },
              }}
            >
              <Styled.h3
                className={'tab create ' + (activeTab === 'create' ? 'active' : '')}
                sx={{ flex: 1 }}
              >
                Create
              </Styled.h3>
              <Styled.h3
                className={'tab publish ' + (activeTab === 'publish' ? 'active' : '')}
                sx={{ flex: 1 }}
              >
                Publish
              </Styled.h3>
            </Flex>
            <div
              className="tab-content"
              sx={{
                bg: 'white',
                '> *': {
                  px: '55px',
                  pt: '90px',
                },
              }}
            >
              {activeTab === 'create' && <CreateAPI />}
              {activeTab === 'publish' && <PublishAPI />}
            </div>
            <BottomSpace/>
          </div>
        </main>
      </Flex>
    </Layout>
  )
}

export default CreateApi
