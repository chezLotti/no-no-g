// calculates column hints
export function calcXHints(x: number, fields: number[]) {
  const xHints: Record<number, number[]> = {}
  for(let i = 0; i < x; i++) {
    let cache = 0
    const cacheArray = []
    for(let j = i; j < fields.length; j += x) {
      if (fields[j] == 1) {
        cache++
      } else {
        if (cache > 0) {
          cacheArray.push(cache)
        }
        cache = 0
      }
    }
    if (cache > 0) {
      cacheArray.push(cache)
    }
    xHints[i] = [...cacheArray]
  }
  return xHints
}

// calculates row hints
export function calcYHints(x: number, y: number, fields: number[]) {
  const yHints: Record<number, number[]> = {}
  for (let i = 0; i < y; i++) {
    let cache = 0
    const cacheArray = []
    for (let j = i * x; j < (i + 1) * x; j++) {
      if (fields[j] == 1) {
        cache++
      } else {
        if (cache > 0) {
          cacheArray.push(cache)
        }
        cache = 0
      }
    }
    if (cache > 0) {
      cacheArray.push(cache)
    }
    yHints[i] = [...cacheArray]
  }
  return yHints
}