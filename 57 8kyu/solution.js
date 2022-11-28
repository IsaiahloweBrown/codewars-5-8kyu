function none(arr, fun){
    // ...
    let value
  
    arr.find(fun) ? value = false : value = true
    return value
  }