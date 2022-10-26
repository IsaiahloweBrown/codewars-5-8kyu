//Works in vs code

function descendingOrder(n){
    
   const arrayOfDigits = Array.from(String(n), Number);
    empty = []
    for (i=0; i<=arrayOfDigits.length;i++) {
      empty.unshift(arrayOfDigits[i])
    }
    output = Number(empty.join(''))
    // console.log(output)
    return output
  }

  descendingOrder(911)

  //Or this

  function descendingOrder(n){
    return +(n+'').split('').sort().reverse().join('')
  }