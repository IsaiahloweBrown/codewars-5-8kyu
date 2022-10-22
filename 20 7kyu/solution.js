//In this kata you will create a function 
//that takes a list of non-negative integers and strings and 
//returns a new list with the strings filtered out.

//7kyu Lister Filtering

function filter_list(l) {
    // Return a new array with the strings filtered out
    //new list 
    let newList = []
    //for loop to checkthe filter list
      for(i=0;i<=l.length;i++) {
        if (parseInt(l[i]) === l[i]){
          newList.push(l[i])
        }
      } 
      return newList
        //if array[i] === "string"
            //do 
  }