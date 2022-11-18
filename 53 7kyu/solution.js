function getDivisorsCnt(n){
    // todo www
    let nums = 0
    for (i=1;i<=n;i++) {
      
      if (n % i === 0) {
         nums++
      }
    }
  return nums
}