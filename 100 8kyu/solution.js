var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    if (humanYears === 1) {
        return [1,15,15];
    }
    else if (humanYears === 2) {
      return [2,24,24]
    }
    else if (humanYears > 2) {
      return [humanYears, (humanYears-2)*(4)+24,  (humanYears-2)*(5)+24]
    }
  }
  