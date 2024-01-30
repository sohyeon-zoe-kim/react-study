export const getClockData = () => {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  const hourAngle = hour * (360 / 12) + minute * (360 / 12 / 60)
  const minuteAngle = minute * (360 / 60)
  const secondAngle = second * (360 / 60)

  const currentTime = `${hour}시 ${minute}분 ${second}초`

  return {
    currentTime,
    hourAngle,
    minuteAngle,
    secondAngle,
  }
}
