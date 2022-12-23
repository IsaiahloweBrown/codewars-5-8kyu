function sumStr(a,b) {
    if (a != "" && b != "") {
        return (parseInt(a) + parseInt(b)).toString()
    } else if (a === "" && b != "") {
        return (parseInt(0) + parseInt(b)).toString()
    } else if (a != "" && b === "") {
        return (parseInt(a) + parseInt(0)).toString()
    } else if (a === "" && b === "") {
        return (0).toString()
    }
  
    
  }