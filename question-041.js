var eulerFortyOne = function() {
  var primes = [];
  for (var i = 2; i < 1e7; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      var j = i + i;
      while(j < 1e7) {
        primes[j] = false;
        j += i;
      }
    }
  }
  var max = 0;
  for (i = 2; i < 1e7; i++) {
    if (primes[i] && isPandigital(i)) {
      max = Math.max(max, i);
    }
  }
  return max;
};

var isPandigital = function(n) {
  n = n.toString();
  var len = n.length;
  var check = '123456789';
  if ( n.split('').sort().join('') !== check.slice(0, len) ) {
    return false;
  }
  return true;
};