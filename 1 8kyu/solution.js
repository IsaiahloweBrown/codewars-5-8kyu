// *8KYU Find the first non-consecutive number

function firstNonConsecutive (arr) { 
    let fnc = arr.find((x, y) => x !== y + arr[0])
    return Number.isInteger (fnc)? fnc: null
  }