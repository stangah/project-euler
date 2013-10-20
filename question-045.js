var eulerFortyFive = function() {
  var pent = {};
  var hex = {};
  for (var i = 143; i < 1e6; i++) {
    pent[(i*(3*i - 1)) / 2] = true;
    hex[i * (2*i - 1)] = true;
    var tri = 0.5 * i * (i + 1);
    if (i > 285 && pent[tri] && hex[tri]) {
      return tri;
    }
  }
  return false;
};
