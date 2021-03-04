/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
const SignInArea = dynamic(() => import('./SignInArea'), { ssr: false })

type HeaderProps = {
  title: string
  onDark?: boolean
}

const Header = ({title, onDark}: HeaderProps) => {
  const router = useRouter()
  return (
    <header
      role="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '152px',
        '*': { display: 'flex', color: onDark ? 'white' : ''},
        '.col': { flex: 2, '&:last-of-type': { justifyContent: 'flex-end' } },
      }}
    >
      <Styled.h1>
        {title}
      </Styled.h1>   
      <div className="col">
        <SignInArea />
      </div>
    </header>
  )
}

export default Header