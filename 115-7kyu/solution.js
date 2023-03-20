function printerError(s) {
    // your code
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
  let errors = 0
  let total = 0
  
  for (i=0;i<s.length;i++) {
    !letters.includes(s[i]) ? errors++ : errors
    total++
  }
  return `${errors}/${total}`
}