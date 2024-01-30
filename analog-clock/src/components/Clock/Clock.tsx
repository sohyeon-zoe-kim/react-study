import { useEffect } from 'react'
import { useAppDisPatch, useAppSelector } from '@/hooks/useRedux'
import { setClockData } from '@/store/clock/clockSlice'
import { getClockData } from '@/utils/getClockData'
import MouseHoverTooltip from '@/components/Tooltip/MouseHoverTooltip'
import * as S from './Clock.styles'

const UPDATE_INTERVAL = 1000

const Clock = () => {
  const dispatch = useAppDisPatch()
  const { currentTime, hourAngle, minuteAngle, secondAngle } = useAppSelector(
    state => state.clock,
  )

  useEffect(() => {
    const clock = setInterval(() => {
      const { currentTime, hourAngle, minuteAngle, secondAngle } =
        getClockData()
      dispatch(
        setClockData({
          currentTime,
          hourAngle,
          minuteAngle,
          secondAngle,
        }),
      )
    }, UPDATE_INTERVAL)

    return () => clearInterval(clock)
  }, [])

  return (
    <MouseHoverTooltip text={currentTime}>
      <S.ClockBox>
        <S.HourHandBox $angle={hourAngle} />
        <S.MinuteHandBox $angle={minuteAngle} />
        <S.SecondHandBox $angle={secondAngle} />
      </S.ClockBox>
    </MouseHoverTooltip>
  )
}

export default Clock
