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
        border: ' 2px solid #688184',
        color: '#688184',
        bg: dark ? '#13212C' : 'white',
        p: '1rem',
        borderRadius: '8px',
        height: skinny ? '42px': '62px',
        '&[aria-expanded="true"]': {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          borderBottom: 'none',
          pt: 'calc(1rem - 2px)',
          '*': {
            color: dark ? '#FFFFFF' : '#688184',
          },
        },
        '.react-dropdown-select-no-data': {
          color: '#688184',
        },
        '&:hover, &:focus-within': {
          borderColor: '#688184',
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
          bg: dark ? '#13212C' : 'white',
          color: dark ? 'white' : '#688184',
          border: dark ? '2px solid #688184' : '2px solid #688184',
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
          color: dark ? '#FFFFFF' : '#688184',
          padding: '1rem 2rem',
          height: skinny ? '36px': '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          pl: '1.25rem',
          '&.react-dropdown-select-item-selected': {
            bg: dark ? '#13212C' : 'white',
            borderBottomColor: 'inherit',
          },
          '&:hover': {
            bg: dark ? '#1F3A46' : 'babyBlueDark',
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
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '14px',
            letterSpacing: '-0.004em',
            textTransform: 'capitalize',
            color: dark ? '#FFFFFF' : '#688184',
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
