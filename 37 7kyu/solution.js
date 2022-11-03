// function SeriesSum(n)
// {
//   let num = 1
//   let den = 1
//   let series = num / den 
//   let sum
//   // Happy Coding ^_^
  
//   for(i=0;i<n;i++){
//        if (n === 1) {
//          sum = '1.00'
  
//          break
//       }else if (n === 0) {
//          sum = '0.00'
      
//         break
//       }
//       if (i !=0) {
//         den += 3
//         sum += series
        
//       }
  
   
//   }
//   return `${sum}`
// }
//20min theory
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }