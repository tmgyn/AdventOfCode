const {str2arr, arr2str, str2dec, transpose, occurence} = require("./common")

const f = (data) => {
  let transposeMatrix = transpose(data.map(str2arr))
  let occurences = transposeMatrix.map(arr => occurence(arr))
  let gammaRate = occurences.map(o => o[0] > o[1] ? "0" : "1")
  let epsilonRate = occurences.map(o => o[0] > o[1] ? "1" : "0")
  // console.log(str2dec(arr2str(gammaRate)))
  // console.log(str2dec(arr2str(epsilonRate)))
  // console.log(str2dec(arr2str(gammaRate)) * str2dec(arr2str(epsilonRate)))

  return str2dec(arr2str(gammaRate)) * str2dec(arr2str(epsilonRate))
}

module.exports = f