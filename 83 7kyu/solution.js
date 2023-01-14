function removeUrlAnchor(url){
    // TODO: complete
    let urlArr = url.split("")
    let newUrl = []
    for (let i=0; i<urlArr.length; i++) {
      newUrl.push(urlArr[i])
      
      if(urlArr[i] === "#" ) {
        newUrl.pop(urlArr[i])
        break;
      }
    }
    return newUrl.join("")
  }