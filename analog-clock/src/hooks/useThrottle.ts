type AnyFunction = (...args: any[]) => any

export const useThrottle = (callback: AnyFunction, delay = 100) => {
  let timer: number | undefined
  return (...args: any[]) => {
    if (timer) return
    timer = setTimeout(() => {
      callback(...args)
      clearTimeout(timer)
    }, delay)
  }
}
