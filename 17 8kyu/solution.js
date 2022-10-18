//7 kyu Testing 1-2-3

//[] --> []
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = array => array.map((element, index) => `${index + 1}: ${element}`)