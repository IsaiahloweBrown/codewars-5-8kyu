function twoSort(s) {
    s.sort()
    let first = s[0].split("")
    for(i=0;i<first.length;i++) {
      if(i !== first.length-1)first[i] += "***"
      
    }
    return first.join("")
  
  }