// const factorial = n => {
//     //   let maxOfN = n
//       let product = 1;
//      if(n > 1) {
//       for (i=n;i>=1;i--) {
//         product *= i
//       }
//       return product;
//      }
//      else if(n === 0 || n === 1) {
//        return 1
//      }
      
//     };
    //Recursion #1 - Factorial

    const factorial = (n) => {


        if (n === 0) {
            return 1;
        }
    
    
        else {
            return n * factorial(n - 1);
        }
    }
    
    const num = 3;
    
    
    if (num > 0) {
        let result = factorial(num);
        console.log(`The factorial of ${num} is ${result}`);
    }