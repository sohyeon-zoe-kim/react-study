import { createSlice } from '@reduxjs/toolkit'
import { getClockData } from '@/utils/getClockData'

interface ClockState {
  hourAngle: number
  minuteAngle: number
  secondAngle: number
  currentTime: string
}

const initialState: ClockState = {
  hourAngle: getClockData().hourAngle,
  minuteAngle: getClockData().minuteAngle,
  secondAngle: getClockData().secondAngle,
  currentTime: getClockData().currentTime,
}

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    setClockData: (state, { payload }) => {
      state.hourAngle = payload.hourAngle
      state.minuteAngle = payload.minuteAngle
      state.secondAngle = payload.secondAngle
      state.currentTime = payload.currentTime
    },
  },
})

export const { setClockData } = clockSlice.actions
export default clockSlice.reducer
