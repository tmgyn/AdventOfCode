const f = (arr, windowSize) => {
  let res = []
  if (arr.length === 0) {throw "Array is empty!"}
  if (arr.length < windowSize) {throw "Array is too small!"}
  for (i = 0; i <= arr.length - windowSize; i++) {
    let window = []
    for (j = 0; j < windowSize; j++) {
      window.push(arr[i + j])
    }
    res.push(window.reduce((a, b) => a + b, 0))
  }
  return res
}

module.exports = f

