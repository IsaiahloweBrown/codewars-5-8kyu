//8kyu Beginner - Reduce but Grow
//
function grow(x){
    let product = 1
    for ( i=0; i<x.length; i++) {
      product *= x[i]
    }
    return product 
  }

  //or array function way:
  //const grow = (nums) => nums.reduce((product, num) => product * num, 1);