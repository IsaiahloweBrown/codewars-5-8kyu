
//Your task is to make a function that can take any non-negative integer as an argument and 
//return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


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