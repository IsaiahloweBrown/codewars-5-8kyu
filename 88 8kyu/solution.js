function removeEveryOther(arr){
    //your code here
    let keepers = []
    for (i=0;i<arr.length;i++){
      if ( i % 2 === 0) {
        keepers.push(arr[i])
      }
    }
    return keepers
  }