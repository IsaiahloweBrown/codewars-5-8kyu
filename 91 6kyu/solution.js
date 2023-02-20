function arrayDiff(a, b) {
  
    return a.filter(same => !b.includes(same))
      
    }