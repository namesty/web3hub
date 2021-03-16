/** @jsxRuntime classic */
/** @jsx jsx */
import {useState, useEffect} from 'react'
import { jsx } from 'theme-ui'
import RDS from 'react-dropdown-select'

type RDSProps = {
  large?: boolean
  dark?: boolean
  detachedResults?: boolean
  searchBy: string
  placeholder: string
  labelField: string
  valueField: string
  options: any[]
  values: any[]
  onChange: (values: any) => void
}

const SearchBox = ({
  large,
  dark,
  detachedResults,
  searchBy,
  placeholder,
  labelField,
  valueField,
  options,
  values,
  onChange,
}: RDSProps) => {
  // Styling fix
  const forceUpdate: () => void = useState()[1].bind(null, {})
  useEffect(() => {
    setTimeout(()=>forceUpdate(),100)
  }, [])
  return (
    <RDS
      sx={{
        borderRadius: '8px',
        width: large ? '100%' : '400px',
        border: ' 2px solid',
        color: dark ? 'text' : '#598188',
        bg: dark ? 'w3shade1' : '#EFF5F4',
        p: '1rem',
        height: '62px',
        borderColor: dark ? 'text' : 'transparent',
        '&[aria-expanded="true"]': {
          borderBottomLeftRadius: detachedResults ? '8px': '0',
          borderBottomRightRadius: detachedResults ? '8px': '0',
          borderBottomColor: detachedResults ? 'text': 'transparent',
          '*': {
            color: dark ? 'white' : 'text',
          },
          '.react-dropdown-select-content': {
            '&::before': {
              background: dark ? 'url(/images/magnifying-glass-white.svg) no-repeat' : 'url(/images/magnifying-glass.svg) no-repeat',
            },
          },
        },
        '.react-dropdown-select-no-data': {
          color: 'text',
        },
        '&:hover, &:focus-within': {
          borderColor: dark ? 'text' : 'transparent',
          boxShadow: 'none',
        },
        '.react-dropdown-select-input': {
          color: dark ? 'white' : 'text',
          fontFamily: 'Istok Web',
          fontSize: '14px',
          lineHeight: '100%',
          width: '200px',
        },
        '.react-dropdown-select-clear': {
          fontSize: '25px',
          top: '-2px',
          right: '-6px',
        },
        '.react-dropdown-select-dropdown': {
          top: detachedResults ? '75px': '58px',
          bg: dark ? 'w3shade1' : '#EFF5F4',
          color: 'white',
          border: '2px solid',
          borderColor: 'w3beige',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopLeftRadius: detachedResults ? '8px': '0px',
          borderTopRightRadius: detachedResults ? '8px': '0px',
          borderTop: detachedResults ? '2px solid' : '1px solid',
          borderTopColor: detachedResults ? 'w3beige' : 'rgba(104,129,132,.5)',
          left: '-2px',
          width: detachedResults ? '30%' : 'calc(100% + 4px)',
        },
        '.react-dropdown-select-item': {
          borderColor: 'rgba(104,129,132,.5)',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '14px',
          color: dark ? 'white' : 'text',
          padding: '1rem 2rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          pl: '1.25rem',
          '&.react-dropdown-select-item-selected': {
            bg: dark ? 'w3shade1' : '#EFF5F4',
            color: dark ? 'white' : 'text',
            borderBottomColor: 'rgba(104,129,132,.5)',
          },
          '&:hover': {
            bg: dark ? 'w3shade3': 'w3TextNavTeal',
            color: dark ? 'inherit': 'white'
          },
          '&::before': {
            display: 'block',
            content: "''",
            width: '24px',
            height: '24px',
            mr: '.75rem',
            border: '1px solid gray',
          },
          '&:last-of-type': {
            borderBottom: 'none',
          },
          '&:first-of-type': {
            borderTop: 'none',
          },
        },
        '.react-dropdown-select-content': {
          '&::before': {
            display: 'block',
            content: "''",
            width: '24px',
            height: '24px',
            mr: '.75rem',
            background: 'url(/images/magnifying-glass.svg) no-repeat',
          },
          span: {
            pl: '.25rem',
            fontFamily: 'Istok Web',
            fontSize: '14px',
            lineHeight: '150%',
            height: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
      }}
      searchable
      clearable
      keepSelectedInList
      dropdownHandle={false}
      searchBy={searchBy}
      placeholder={placeholder}
      labelField={labelField}
      valueField={valueField}
      options={options}
      values={values}
      onChange={onChange}
    />
  )
}

export default SearchBox
