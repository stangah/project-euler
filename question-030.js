var eulerThirty = function(n) {
  solutions = [];
  for (var i = 1000; i < 1e4; i++) {
    var numArray = i.toString().split('');
    var tempSum = 0;
    for (var j = 0; i < numArray.length; j++) {
      tempSum += Math.pow( +numArray[j], n );
    }
    if (tempSum === i) {
      solutions.push(i);
    }
  }
  var total = 0;
  for (var k = 0; k < solutions.length; k++) {
    total += solutions[k];
  }
  return total;
};

eulerThirty(4);
