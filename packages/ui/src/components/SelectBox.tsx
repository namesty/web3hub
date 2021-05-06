/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import RDS from 'react-dropdown-select'

type RDSProps = {
  dark?: boolean
  skinny?: boolean
  labelField: string
  valueField: string
  options: any[]
  values?: any[]
  onChange: (values: any) => void
}

const SelectBox = ({
  dark,
  skinny,
  labelField,
  valueField,
  options,
  values,
  onChange,
}: RDSProps) => {
  return (
    <RDS
      sx={{
        width: '17.5rem',
        border: ' 0.125rem solid',
        borderColor: 'w3beige',
        color: 'text',
        bg: dark ? 'w3shade1' : 'white',
        p: '1rem',
        borderRadius: '0.5rem',
        height: skinny ? '2.625rem' : '3.875rem',
        '&[aria-expanded="true"]': {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          borderBottom: 'none',
          pt: 'calc(1rem - 0.125rem)',
          '*': {
            color: dark ? 'white' : 'text',
          },
        },
        '.react-dropdown-select-no-data': {
          color: 'text',
        },
        '&:hover, &:focus-within': {
          borderColor: 'text',
          boxShadow: 'none',
        },
        '.react-dropdown-select-input': {
          display: 'none',
        },
        '.react-dropdown-select-clear': {
          fontSize: '1.5625rem',
          top: '-0.125rem',
          right: '-0.375rem',
        },
        '.react-dropdown-select-dropdown': {
          top: skinny ? '2.375rem' : '3.625rem',
          bg: dark ? 'w3shade1' : 'white',
          color: dark ? 'white' : 'text',
          border: dark ? '0.125rem solid' : '0.125rem solid',
          borderColor: dark ? 'w3beige' : 'w3beige',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          borderTopLeftRadius: '0rem',
          borderTopRightRadius: '0rem',
          borderTop: '0.0625rem solid rgba(104,129,132,.5)',
          left: '-0.125rem',
          width: 'calc(100% + 0.25rem)',
        },
        '.react-dropdown-select-item': {
          borderColor: 'rgba(104,129,132,.5)',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '0.875rem',
          lineHeight: '0.875rem',
          color: dark ? 'white' : 'text',
          padding: '1rem 2rem',
          height: skinny ? '2.25rem' : '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          pl: '1.25rem',
          '&.react-dropdown-select-item-selected': {
            bg: dark ? 'w3shade1' : 'white',
            borderBottomColor: 'inherit',
          },
          '&:hover': {
            bg: dark ? 'w3shade3' : '#cad9f3',
          },
          '&:last-of-type': {
            borderBottom: 'none',
          },
          '&:first-of-type': {
            borderTop: 'none',
          },
        },
        '.react-dropdown-select-content': {
          span: {
            height: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Montserrat',

            fontWeight: 'bold',
            fontSize: '0.875rem',
            lineHeight: '0.875rem',
            letterSpacing: '-0.004em',

            color: dark ? 'white' : 'text',
          },
        },
        '.react-dropdown-select-dropdown-handle:focus path': {
          stroke: 'none',
        },
      }}
      keepSelectedInList
      dropdownHandle={true}
      labelField={labelField}
      valueField={valueField}
      options={options}
      values={values}
      onChange={onChange}
    />
  )
}

export default SelectBox
