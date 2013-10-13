var eulerThirtyFour = function() {
  var factorial = function(n) {
    var ans = 1;
    for (var i = 1; i <= n; i++) {
      ans *= i;
    }
    return ans;
  };

  var sum = 0;
  for (var i = 10; i < 1e4; i++) {
    var tempSum = 0;
    var str = i.toString();
    for (var j = 0; j < str.length; j++) {
      tempSum += factorial(+str[j]);
    }
    if (tempSum === i) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
};