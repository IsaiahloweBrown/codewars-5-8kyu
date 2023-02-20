function positiveSum(arr) {
    return arr.filter(number => number > 0).reduce((a, b) => a + b, 0)
    
  }