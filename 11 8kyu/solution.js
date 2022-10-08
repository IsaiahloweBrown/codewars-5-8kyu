//8 kyu Counting sheep...
function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    total = 0
    for(i=0; i<arrayOfSheep.length; i++) {
      if (arrayOfSheep[i]) {
        total = total + 1
      }
  
    }
    return total
  }