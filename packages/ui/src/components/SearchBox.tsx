/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useEffect } from 'react'
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
  onChange?: (value: any) => void
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
  onChange,
}: RDSProps) => {
  // Styling fix
  const forceUpdate: () => void = useState()[1].bind(null, {})
  useEffect(() => {
    setTimeout(() => forceUpdate(), 100)
  }, [])
  return (
    <RDS
      sx={{
        borderRadius: '0.5rem',
        width: large ? '100%' : '25rem',
        border: '0.125rem solid',
        color: dark ? 'text' : '#598188',
        bg: dark ? 'w3shade1' : '#EFF5F4',
        p: '1rem',
        height: '3.875rem',
        borderColor: dark ? 'text' : 'transparent',
        '&[aria-expanded="true"]': {
          borderBottomLeftRadius: detachedResults ? '0.5rem' : '0',
          borderBottomRightRadius: detachedResults ? '0.5rem' : '0',
          borderBottomColor: detachedResults ? 'text' : 'transparent',
          '*': {
            color: dark ? 'white' : 'text',
          },
          '.react-dropdown-select-content': {
            '&::before': {
              background: dark
                ? 'url(/images/magnifying-glass-white.svg) no-repeat'
                : 'url(/images/magnifying-glass.svg) no-repeat',
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
          fontSize: '0.875rem',
          lineHeight: '100%',
          width: '12.5rem',
        },
        '.react-dropdown-select-clear': {
          fontSize: '1.5625rem',
          top: '-0.125rem',
          right: '-0.375rem',
        },
        '.react-dropdown-select-dropdown': {
          top: detachedResults ? '4.6875rem' : '3.625rem',
          bg: dark ? 'w3shade1' : '#EFF5F4',
          color: 'white',
          border: '0.125rem solid',
          borderColor: 'w3beige',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          borderTopLeftRadius: detachedResults ? '0.5rem' : '0rem',
          borderTopRightRadius: detachedResults ? '0.5rem' : '0rem',
          borderTop: detachedResults ? '0.125rem solid' : '0.0625rem solid',
          borderTopColor: detachedResults ? 'w3beige' : 'rgba(104,129,132,.5)',
          left: '-0.125rem',
          width: detachedResults ? '30%' : 'calc(100% + 0.25rem)',
        },
        '.react-dropdown-select-item': {
          borderColor: 'rgba(104,129,132,.5)',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '0.875rem',
          lineHeight: '0.875rem',
          color: dark ? 'white' : 'text',
          padding: '1rem 2rem',
          height: '3.5rem',
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
            bg: dark ? 'w3shade3' : 'w3TextNavTeal',
            color: dark ? 'inherit' : 'white',
          },
          '&::before': {
            display: 'block',
            content: "''",
            width: '1.5rem',
            height: '1.5rem',
            mr: '.75rem',
            border: '0.0625rem solid gray',
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
            width: '1.5rem',
            height: '1.5rem',
            mr: '.75rem',
            background: 'url(/images/magnifying-glass.svg) no-repeat',
          },
          span: {
            pl: '.25rem',
            fontFamily: 'Istok Web',
            fontSize: '0.875rem',
            lineHeight: '150%',
            height: '1.5rem',
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
      onChange={onChange}
    />
  )
}

export default SearchBox
