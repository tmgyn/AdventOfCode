const {str2arr, str2dec, transpose, occurence} = require("./common")
const data = require("./data")

const oxygenGeneratorRating = (data, pos) => {
  let transposeMatrix = transpose(data.map(str2arr))
  let o = occurence(transposeMatrix[pos])

  let res = data.sort((a, b) => {
    return (o[0] > o[1] ? a[pos] > b[pos] : a[pos] < b[pos]) ? 1 : a[pos] == b[pos] ? 0 : -1
  }).slice(0, Math.max(...Object.values(o)))

  return res.length <= 1 ? res : oxygenGeneratorRating(res, ++pos)
}

const co2ScrubberRating = (data, pos) => {
  let transposeMatrix = transpose(data.map(str2arr))
  let o = occurence(transposeMatrix[pos])

  let res = data.sort((a, b) => {
    return (o[0] <= o[1] ? a[pos] > b[pos] : a[pos] < b[pos]) ? 1 : a[pos] == b[pos] ? 0 : -1
  }).slice(0, Math.min(...Object.values(o)))

  return res.length <= 1 ? res : co2ScrubberRating(res, ++pos)
}

const f = (data) => {
  const r1 = oxygenGeneratorRating(data, 0)
  const r2 = co2ScrubberRating(data, 0)
  const result = str2dec(r1) * str2dec(r2)
  return result
}

module.exports = f