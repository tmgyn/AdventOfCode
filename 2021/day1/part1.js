const f = (arr) => {
  let res = 0
  if (arr.length === 0) {throw "Array is empty!"}
  if (arr.length < 1) {throw "Array is too small!"}
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) res++
  }
  return res
}

module.exports = f