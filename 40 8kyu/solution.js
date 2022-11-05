function solution(str){
    let strToArray = str.split("")
    let reverseOfStr = strToArray.reverse()
    let reverseStr =  reverseOfStr.join("")
    return reverseStr
  }