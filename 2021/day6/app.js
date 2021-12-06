// const data = [3, 4, 3, 1, 2]
const data = require("./data")

const f = (value, days) => {
  let remainingDays = days - value
  if (remainingDays > 0) {
    return myMemory.exists(7, remainingDays) + myMemory.exists(9, remainingDays)
  } else {
    return 1
  }
}

let memory = new Map()
myMemory = {
  exists: (value, days) => {
    const exists = memory.get(`${value},${days}`)
    if (exists) {
      return exists
    } else {
      const res = f(value, days)
      memory.set(`${value},${days}`, res)
      return res
    }
  }
}

let total = 0
data.forEach(fish => {
  total += f(fish, 256)
})
console.log(total)