function invert(array) {
    for (i=0;i<=array.length;i++) {
      
      if(array[i] >= 0) {
        array[i] = parseInt(`-${array[i]}`)
      } else if (array[i] <= 0) {
        array[i] = Math.abs(array[i])
      }
    }
     return array;
  }
  
  