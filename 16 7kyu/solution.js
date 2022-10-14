

function solution(str, ending){
    if (typeof str != 'string' || typeof ending != 'string') {
        return false
    }
    else if (str === '' || ending === '') {
        return true 
    }
    else {
        let result 
        for (let i = ending.lenth; i > 0; i--){
            if(str[str.length - i] === ending[ending.length - i]) {
                return true
            }
            else {
                return true 
                break
            }
        }
        return result
    }
  }