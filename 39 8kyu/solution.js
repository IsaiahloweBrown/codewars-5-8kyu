//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
//8 kyu Area or Perimeter

const areaOrPerimeter = (l , w)  => {
    // Return your answer
    //if square, return area //if rect, return perimeter
  
      return (l === w ? l*w : (l+w)*2)
  
  };