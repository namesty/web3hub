/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'

type BadgeProps = {
  label: string
}
const Badge = ({ label }: BadgeProps) => {
  return (
    <div
      sx={{
        cursor: 'default',
        border: '2px solid black',
        textTransform: 'uppercase',
        borderColor: '#509DAC',
        borderRadius: '8px',
        px: 2,
        py: 1,
        mx: 2,
        color: '#509DAC',
        fontFamily: '"Poppins"',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '18px',
      }}
    >
      {label}
    </div>
  )
}

export default Badge
