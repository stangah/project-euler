var eulerThirtyTwo = function() {
  var ans = 1;
  for (var i = 1; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      for (var k = 1; k < 10; k++) {
        if ( ((10*i + j) / (10*j + k) === i / k) && (i !== j || j !== k || i !== k) ) {
          ans *= (10*i + j) / (10*j + k);
        }
      }
    }
  }
  return ans;
};
