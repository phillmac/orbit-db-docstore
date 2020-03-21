
function docSort (a, b) {
  if (a.key > b.key) {
    return 1
  }
  if (b.key > a.key) {
    return -1
  }
  return 0
}

module.exports = {
  docSort
}
