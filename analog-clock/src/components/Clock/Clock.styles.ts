import styled from 'styled-components'

export const ClockBox = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #212020;
`

export const HandBox = styled.div<{ $angle: number }>`
  position: absolute;
  transform: ${({ $angle }) => `rotate(${$angle}deg)`};
  transform-origin: bottom;
`

export const HourHandBox = styled(HandBox)`
  width: 10px;
  height: 140px;
  background-color: #3898ec;
  z-index: 10;
  top: 60px;
  left: 195px;
`

export const MinuteHandBox = styled(HandBox)`
  width: 8px;
  height: 180px;
  background-color: #3898ec;
  z-index: 5;
  top: 20px;
  left: 196px;
`
export const SecondHandBox = styled(HandBox)`
  width: 4px;
  height: 190px;
  background-color: #ffffff;
  z-index: 1;
  top: 10px;
  left: 198px;
`
