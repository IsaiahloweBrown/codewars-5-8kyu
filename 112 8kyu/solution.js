function bouncingBall(h,  bounce,  window) {
    // your code here
      var counter = -1;
    if (bounce > 0 && bounce < 1) while (h > window) counter+=2, h *= bounce;
    return counter;
  }