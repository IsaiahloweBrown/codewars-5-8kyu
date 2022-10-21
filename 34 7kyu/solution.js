const factorial = n => {
    //   let maxOfN = n
      let product = 1;
     if(n > 1) {
      for (i=n;i>=1;i--) {
        product *= i
      }
      return product;
     }
     else if(n === 0 || n === 1) {
       return 1
     }
      
    };