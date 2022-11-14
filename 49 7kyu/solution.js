function getCount(str) {
    let counter = 0
    let strArr = str.split("")
    for (i=0;i<strArr.length; i++) {
        if (strArr[i] === "a" || strArr[i] === "e" || strArr[i] === "i" || strArr[i] === "o" || strArr[i] === "u") {
          counter++
        } 
    }
    return counter;
    
  }