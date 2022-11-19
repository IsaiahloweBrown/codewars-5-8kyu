function barTriang(p1, p2, p3){
    //your code here
    medians = []
    m1 = (p1[0] + p2[0] + p3[0]) / 3
    m2 = (p1[1] + p2[1] + p3[1]) / 3
    m1 = parseFloat(m1.toFixed(4))
    m2 = parseFloat(m2.toFixed(4))
    medians.push(m1)
    medians.push(m2)
    return medians
  }