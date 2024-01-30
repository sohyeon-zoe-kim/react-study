import styled from 'styled-components'

export const TooltipLayout = styled.div<{ $x: number; $y: number }>`
  position: relative;

  &:hover > .tooltip {
    display: block;
  }

  .tooltip {
    position: fixed;
    z-index: 10;
    display: none;
    padding: 10px;
    left: ${({ $x }) => $x}px;
    top: ${({ $y }) => $y - 50}px;
    background-color: #ffffff;
    opacity: 0.5;
  }
`
