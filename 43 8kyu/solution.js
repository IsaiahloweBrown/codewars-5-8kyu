function squareDigits(num){
    //put in array
   let arrayOfDigits = Array.from(String(num), Number)
   let square
    //square everything in length
    for (i=0;i<arrayOfDigits;i++) {
      square = parseInt(array[i])
      square = square * square
      arrayOfDigits[i].push(square)
    }
    //join()
    return parseInt(arrayOfDigits.join());
  }

  return squareDigits(234454)


  function squareDigits(num){
    let string = num.toString();  
    let results = [];       
    for (let i = 0; i < string.length; i++){ 
        results[i] = string[i] * string[i];   
    }
    return Number(results.join(''));  
  }