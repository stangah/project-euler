var eulerThirtyEight = function() {
  var max = 0;
  for (var i = 1; i < 1e5; i++) {
    var string = '';
    var j = 1;
    while(string.length < 9) {
      string += i * j;
      j++;
    }
    if (isPandigital(string)) {
      max = Math.max(max, +string);
    }
  }
  return max;
};

var isPandigital = function(n) {
  n = n.toString();
  if ( n.split('').sort().join('') !== '123456789' ) {
    return false;
  }
  return true;
};