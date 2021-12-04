const {m, d} = require("./data")
const keyGen = (row, column) => `[${row},${column}]`
const getRow = key => key.replace(/[\[\]']+/g, '').split(",")[0]
const getColumn = key => key.replace(/[\[\]']+/g, '').split(",")[1]

const validateRow = (map, k) => {
  for (i = 0; i < 5; i++) {
    let tmp = map.get(keyGen(getRow(k), i))
    if (tmp.state === false) {
      return false
    }
  }
  throw "bingo"
}

const validateColumn = (map, k) => {
  for (i = 0; i < 5; i++) {
    let tmp = map.get(keyGen(i, getColumn(k)))
    if (tmp.state === false) {
      return false
    }
  }
  throw "bingo"
}

const letBingo = (map, values, pos) => {
  for (let [k, v] of map) {
    try {
      if (v.value === values[pos]) {
        map.set(k, {...v, state: true})
        validateRow(map, k)
        validateColumn(map, k)
      }
    } catch (e) {
      const total = [...map].reduce((acc, v) => {
        if (v[1].state === false) {
          return acc + v[1].value
        }
        return acc
      }, 0)
      res.push({rolls: pos, total: total * values[pos]})
      return
    }
  }
  return pos < values.length ? letBingo(map, values, ++pos) : console.log("no bingo")
}

const f = (m) => {
  let map = new Map()
  m.forEach((v, row) => {
    v.forEach((v, column) => {
      map.set(keyGen(row, column), {value: v, state: false})
    })
  })
  letBingo(map, d, 0)
}

let res = []
m.forEach(f)
const sorted = res.sort((a, b) => a.rolls - b.rolls)
console.log(`first with total of ${sorted[0].total}`)
console.log(`last with total of ${sorted[sorted.length - 1].total}`)

