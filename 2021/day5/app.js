const matrix = (row, col) => {
  let m = []
  for (i = 0; i < row; i++) {
    let tmp = []
    for (j = 0; j < col; j++) {
      tmp.push(0)
    }
    m.push(tmp)
  }
  return {
    pos: (x, y) => m[y][x] += 1,
    value: (x, y) => m[y][x],
    values: m
  }
}

const p = (x, y) => {
  return {x: x, y: y}
}

const letTrace = (m, p1, p2) => {

  if (p1.x == p2.x) {
    let tmp = [p1.y, p2.y].sort((a, b) => a - b)
    delta = tmp[1] - tmp[0]
    for (i = 0; i <= delta; i++) {
      m.pos(p1.x, tmp[0] + i)
    }
  }
  if (p1.y == p2.y) {
    let tmp = [p1.x, p2.x].sort((a, b) => a - b)
    delta = tmp[1] - tmp[0]
    for (i = 0; i <= delta; i++) {
      m.pos(tmp[0] + i, p1.y)
    }
  }
  if (Math.abs(p1.x - p2.x) === Math.abs(p1.y - p2.y)) {
    let tmp = [p1, p2].sort((p1, p2) => p1.x - p2.x)
    let y = tmp[1].y - tmp[0].y
    if (y > 0) {
      for (i = 0; i <= Math.abs(y); i++) {
        m.pos(tmp[0].x + i, tmp[0].y + i)
      }
    } else {
      for (i = 0; i <= Math.abs(y); i++) {
        m.pos(tmp[0].x + i, tmp[0].y - i)
      }
    }
  }

  return m
}
m = matrix(10, 10)
m = letTrace(m, p(0, 9), p(5, 9))
m = letTrace(m, p(8, 0), p(0, 8))
m = letTrace(m, p(9, 4), p(3, 4))
m = letTrace(m, p(2, 2), p(2, 1))
m = letTrace(m, p(7, 0), p(7, 4))
m = letTrace(m, p(6, 4), p(2, 0))
m = letTrace(m, p(0, 9), p(2, 9))
m = letTrace(m, p(3, 4), p(1, 4))
m = letTrace(m, p(0, 0), p(8, 8))
m = letTrace(m, p(5, 5), p(8, 2))
console.log(m.values.flat().filter(v => v >= 2).length)

module.exports = {
  matrix,
  p,
  letTrace
}