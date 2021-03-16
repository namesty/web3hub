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
  values: any[]
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
        width: '280px',
        border: ' 2px solid',
        borderColor: 'w3beige',
        color: 'text',
        bg: dark ? 'w3shade1' : 'white',
        p: '1rem',
        borderRadius: '8px',
        height: skinny ? '42px': '62px',
        '&[aria-expanded="true"]': {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          borderBottom: 'none',
          pt: 'calc(1rem - 2px)',
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
          fontSize: '25px',
          top: '-2px',
          right: '-6px',
        },
        '.react-dropdown-select-dropdown': {
          top: skinny ? '38px': '58px',
          bg: dark ? 'w3shade1' : 'white',
          color: dark ? 'white' : 'text',
          border: dark ? '2px solid' : '2px solid',
          borderColor: dark ? 'w3beige' : 'w3beige',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          borderTop: '1px solid rgba(104,129,132,.5)',
          left: '-2px',
          width: 'calc(100% + 4px)',
        },
        '.react-dropdown-select-item': {
          borderColor: 'rgba(104,129,132,.5)',
          fontFamily: 'Montserrat',
          fontWeight: 'bold',
          fontSize: '14px',
          lineHeight: '14px',
          color: dark ? 'white' : 'text',
          padding: '1rem 2rem',
          height: skinny ? '36px': '56px',
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
            height: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Montserrat',
            
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '14px',
            letterSpacing: '-0.004em',
            textTransform: 'capitalize',
            color: dark ? 'white' : 'text',
          },
        },
        '.react-dropdown-select-dropdown-handle:focus path': {
          stroke: 'none'
        }
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
