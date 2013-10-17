var eulerThirtyNine = function() {
  var max = [0,0]; // [p, n]
  for (var p = 12; p < 1000; p++) {
    var sols = 0;
    for (var c = Math.floor(p / 4); c < p / 2; c++) {
      for (var b = Math.floor(c / 2); b < c; b++) {
        var a = p - c - b;
        if (Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2)) {
          sols++;
        }
      }
    }
    if (sols > max[1]) {
      max = [p, sols];
    }
  }
  return max;
};