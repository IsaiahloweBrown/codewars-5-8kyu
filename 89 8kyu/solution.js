function index(array, n){
    //your code here
    //explanation: in said array, we want to the index of n in the array
    //if array index of n does not exist
    // returns -1
    //if array index of n does exist
    // return array index of n by a power of n 
      return ! array[n] ? -1 : Math.pow(array[n], n)
  
  }