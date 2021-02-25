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
        border: '2px solid babyBlue',
        textTransform: 'uppercase',
        borderColor: 'babyBlue',
        borderRadius: 3,
        p: 2,
        mx: 2,
        color: 'babyBlue',
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
