//8kyu Sqaure(n)Sum

function squareSum(numbers){
    sum = 0
    for(i=0;i<numbers.length; i++) {
     sum = (Math.pow(numbers[i],2))
     numbers[i] = sum
    }
    return (numbers.reduce((a, b) => a + b, 0))
  }
  //easiest way to solve problem


  //function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }