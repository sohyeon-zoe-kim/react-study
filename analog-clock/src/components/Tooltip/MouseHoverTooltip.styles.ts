import styled from 'styled-components'

export const TooltipLayout = styled.div<{
  $x: number
  $y: number
}>`
  position: relative;

  &:hover > .tooltip {
    display: block;
  }

  .tooltip {
    position: fixed;
    z-index: 10;
    display: none;
    padding: 10px;
    background-color: #ffffff;
    opacity: 0.5;
  }

  .tooltip.top-right {
    left: ${({ $x }) => $x}px;
    top: ${({ $y }) => $y - 60}px;
  }

  .top-right::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    border-top: 10px solid #ffffff;
    border-right: 10px solid transparent;
  }

  .tooltip.top-left {
    right: ${({ $x }) => `calc(100% - ${$x}px)`};
    top: ${({ $y }) => $y - 60}px;
  }

  .top-left::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -10px;
    border-top: 10px solid #ffffff;
    border-left: 10px solid transparent;
  }

  .tooltip.bottom-left {
    right: ${({ $x }) => `calc(100% - ${$x}px)`};
    top: ${({ $y }) => $y + 30}px;
  }

  .bottom-left::after {
    content: '';
    position: absolute;
    top: -10px;
    right: 0;
    border-bottom: 10px solid #ffffff;
    border-left: 10px solid transparent;
  }

  .tooltip.bottom-right {
    left: ${({ $x }) => $x}px;
    top: ${({ $y }) => $y + 30}px;
  }

  .bottom-right::after {
    content: '';
    position: absolute;
    left: 0;
    top: -10px;
    border-bottom: 10px solid #ffffff;
    border-right: 10px solid transparent;
  }
`
