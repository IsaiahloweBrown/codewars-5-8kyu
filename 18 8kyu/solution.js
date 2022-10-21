// 8 kyu Count by X


function countBy(x, n) {
    // product = * x and n
  
    // set z as array
    let z = [];
    // for loop and the length to product
    for(let i=1; i <= n; i++) {
        
         z.push(x*i)
    }
        // z.push(i)
   
    return z;
  }