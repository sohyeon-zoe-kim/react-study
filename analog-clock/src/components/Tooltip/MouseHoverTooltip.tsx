import { useState } from 'react'
import { useThrottle } from '@/hooks/useThrottle'
import * as S from './MouseHoverTooltip.styles'

interface MouseHoverTooltipProps {
  children: React.ReactElement
  text: string
  direction: string
}

const MouseHoverTooltip = ({
  children,
  text,
  direction = 'top-right',
}: MouseHoverTooltipProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMoveTooltip = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <S.TooltipLayout
      onMouseMove={useThrottle(handleMoveTooltip, 50)}
      $x={position.x}
      $y={position.y}>
      {children}
      <div className={`tooltip ${direction}`}>{text}</div>
    </S.TooltipLayout>
  )
}

export default MouseHoverTooltip
