// function highAndLow(numbers){
//   // ...
//   let numArray = (numbers.split(" "))
//   let arrOfNum = []
//   let min, max  
//   numArray.forEach(str => {
//   arrOfNum.push(Number(str));
    
//   max = Math.max(arrOfNum)
  
//   min = Math.min(arrOfNum)
    
//     return Math.max(arrOfNum)
// });
//}

function highAndLow(numbers){
    let nums = numbers.split(" ");
      return `${Math.max(...nums)} ${Math.min(...nums)}`;
    }
