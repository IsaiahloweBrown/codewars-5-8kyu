//8kyu Convert number to reversed array of digits

function digitize(n) {
    //code here 
    const arrayForN = Array.from(String(n), Number);
    return arrayForN.reverse()
  }