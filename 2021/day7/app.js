// const data = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]
const data = require("./data")

const memory = new Map()
const myMemory = {
  set: (key, f) => {
    const exists = memory.get(key)
    if (exists) {
      return exists
    } else {
      const value = f()
      memory.set(key, value)
      return value
    }
  }
}

let loopCnt = 0
const loop = (delta) => {
  loopCnt++
  if (delta < 1) {
    return 0
  }
  if (delta === 1) {
    return 1
  }
  // return delta + loop(delta - 1)
  return myMemory.set(delta, () => delta + loop(delta - 1))
}

const result = new Map()
let maxPos = Math.max(...data)
for (pos = 0; pos < maxPos; pos++) {
  let total = 0
  data.forEach(v => {
    total += loop(Math.abs(v - pos))
  })
  result.set(pos, total)
}
let min = [...result.entries()].reduce((a, b) => b[1] < a[1] ? b : a)
console.log(`pos: ${min[0]}, fuel cost: ${min[1]}`)
console.log(`loop count: ${loopCnt}`)

