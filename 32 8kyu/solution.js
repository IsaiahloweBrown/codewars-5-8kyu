function XO(str) {
    //code here
  let counter = 0
  str.split``.forEach(c => {
    if ('x' === c.toLowerCase()) {
      counter += 1
    }
    if ('o' === c.toLowerCase()) {
      counter -= 1
    }
  })
  return counter === 0
}