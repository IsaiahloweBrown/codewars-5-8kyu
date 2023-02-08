function alphabetPosition(text) {
  
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let numbers = []

   text = text.toLowerCase();


  for( let i=0;i<text.length;i++){
    let idx = alpha.indexOf(text[i])

    if(idx === -1){
        continue;
    }else{
        numbers.push(idx +1)
    }
  }
 
   return numbers.join(' ')

  }

 
  