function rentalCarCost(d) {
   // Your solution here
   let total
   if (d < 3) {
       total = d * 40
   } else if (d >= 3 & d <= 6) {
      total = d * 40 - 20
   } 
   
   else if (d > 7 || d <= 9){
       total = (d * 40) - 50
   } else if (d = 10) {
       total = (d * 40) -50
   }
   return total