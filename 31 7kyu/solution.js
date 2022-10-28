function XO(str) {
    //code here
 let counterForX
 let counterForO

  const strOfXO = str.split("")
  for (i=0;i<strOfXO.length; i++) {
    if (strOfXO[i] === "x" || strOfXO[i] === "X") {
        counterForX++
    } else if (strOfXO[i] === "o"  || strOfXO[i] === "O") {
        counterForO++
    }
    if (counterForX === counterForO) {
        return true
        alert("true")
    }
    else {
        return false
        alert("true")
    }
  }
}

XO("xxxooox")