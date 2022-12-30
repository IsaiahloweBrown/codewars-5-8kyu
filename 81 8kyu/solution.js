function fakeBin(x){
    let arr = x.split("")
    for (i=0;i<arr.length;i++){
      if(parseInt(arr[i]) >= 5) {
        arr[i] = 1
      } else {
        arr[i] = 0
      }
    }
    return arr.join("")
  }