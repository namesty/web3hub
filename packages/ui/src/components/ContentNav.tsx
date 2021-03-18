/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui'

type tab = {
  label: string
  count?: number
}

type ContentNav = {
  setActiveTab: (value: string) => void
  activeTab: string
  tabs: tab[]
}

const ContentNav = ({ setActiveTab, activeTab, tabs }: ContentNav) => {
  return (
    <Flex
      className="tabs"
      sx={{
        '*': { cursor: 'pointer', mr: 2, mb: 4 },
        '.tab': {
          textAlign: 'center',
          fontSize: '16px',
          letterSpacing: '-0.4000000059604645px',
          pb: ' 18px',
          color: 'text',
          mb: 0,
          minWidth: '120px',
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
      {tabs.map((tab) => {
        let id = tab.label.toLowerCase()
        return (
          <Styled.h6
            key={tab.label}
            className={'tab ' + id + ' ' + (activeTab === id ? 'active' : '')}
            onClick={() => setActiveTab(id)}
          >
            <span
              className="label"
              sx={{
                fontFamily: 'Montserrat',                
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '-0.4px',
                color: 'w3darkGreen',
                mixBlendMode: 'normal',
                opacity: '0.9',
                mb: 0
              }}
            >
              {tab.label}
            </span>
            <span
              sx={{
                backgroundColor: 'rgba(104,129,132,.1)',
                fontFamily: 'Montserrat',
                fontWeight: '600',
                fontSize: '13px',
                lineHeight: '16px',
                textAlign: 'center',
                letterSpacing: '-0.4px',
                color: 'w3darkGreen',
                mixBlendMode: 'normal',
                px: '.3rem',
                py: '.1rem',
                borderRadius: '50%',
                mb: 0
              }}
            >
              {tab.count}
            </span>
          </Styled.h6>
        )
      })}
    </Flex>
  )
}

export default ContentNav
