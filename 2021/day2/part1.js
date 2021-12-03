/**
 * 
 * @param {String[]} arr 
 * @returns 
 */
const f = (arr) => {
  let x = 0, y = 0

  arr.forEach(e => {
    res = e.split(" ")
    if (res[0] === "forward") x += parseInt(res[1])
    if (res[0] === "down") y += parseInt(res[1])
    if (res[0] === "up") y -= parseInt(res[1])
  })

  return x * y
}

module.exports = f