function smallEnough(a, limit){
  let vibecheck = []
  for (i=0;i<a.length;i++) {
     a[i] > limit ? vibecheck.push(true) : vibecheck.push(false)
  }
  return !vibecheck.includes(true)
}