var eulerFortyEight = function(n) {
  var digitLimit = Math.pow(10,10);
  var truncSum = 0;
  for (var i = 1; i <= n; i++) {
    var truncProd = 1;
    for (var j = 0; j < i; j++) {
      truncProd = (truncProd * i) % digitLimit;
    }
    truncSum = (truncSum + truncProd) % digitLimit;
  }
  return truncSum;
};