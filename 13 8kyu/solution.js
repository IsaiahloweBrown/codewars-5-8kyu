//8kyu Sqaure(n)Sum

function squareSum(numbers){
    sum = 0
    for(i=0;i<numbers.length; i++) {
     sum = (Math.pow(numbers[i],2))
     numbers[i] = sum
    }
    return (numbers.reduce((a, b) => a + b, 0))
  }