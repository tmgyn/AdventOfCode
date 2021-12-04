const str2arr = str => Array.from(str)
const arr2str = arr => arr.join("")
const str2dec = str => parseInt(str, 2)
const transpose = m => m[0].map((x, i) => m.map(x => x[i]))
const occurence = arr => arr.reduce((acc, curr) => {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {})

module.exports = {
  str2arr,
  arr2str,
  str2dec,
  transpose,
  occurence
}
