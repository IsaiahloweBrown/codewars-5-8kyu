// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// 7 kyu
// Reverse words

function reverseWords(str) {
    // Go for it
      let sentence = str.split(/(\s+)/)
      let result = ""
      for(let i=0;i<sentence.length;i++){
        result+=sentence[i].split("").reverse().join("")
      }
    return result
  }
  