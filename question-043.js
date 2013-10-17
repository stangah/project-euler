var eulerFortyThree = function() {
  var total = 0;
  var digits = '0123456789';

  var recurse = function(toUse, soFar) {
    if (soFar.length === 10 && checkProperties(soFar)) {
      total += +soFar;
    }
    for (var i = 0; i < toUse.length; i++) {
      recurse( toUse.slice(0, i) + toUse.slice(i + 1), soFar + toUse[i] );
    }
  };

  var checkProperties = function(numString) {
    var checkArray = [2,3,5,7,11,13,17];
    for (var i = 1; i <= 7; i++) {
      var num = +(numString[i] + numString[i + 1] + numString[i + 2]);
      if (num % checkArray[i - 1] !== 0) {
        return false;
      }
    }
    return true;
  };

  recurse(digits, '');
  return total;
};