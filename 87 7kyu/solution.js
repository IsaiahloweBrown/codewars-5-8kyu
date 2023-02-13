function minMax(arr){
    let prices = []
    prices.push(Math.min(...arr))
    prices.push(Math.max(...arr))
    return prices
  }