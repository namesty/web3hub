/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'

type BadgeProps = {
  label: string,
  onDark?: boolean
}

const Badge = ({ label, onDark }: BadgeProps) => {
  return (
    <div
      sx={{
        cursor: 'default',
        border: '2px solid black',
        textTransform: 'uppercase',
        borderColor: onDark ? '#CAD9F3': '#EFF5F4',
        borderRadius: '8px',
        px: 2,
        py: 1,
        mx: 2,
        color: onDark ? '#CAD9F3': '#509DAC',
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
