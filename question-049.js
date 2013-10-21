var eulerFortyNine = function() {
  var primes = {};
  var primeArr = [];
  for (i = 2; i < 1e6; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      primeArr.push(i);
      j = i + i;
      while(j < 1e6) {
        primes[j] = false;
        j += i;
      }
    }
  }

  for (var i = 1001; i < 10000; i++) {
    if (primes[i] && i !== 1487) {
      for (var k = 1000; k < 4400; k++) {
        if (primes[i + k] &&
          (i).toString().split('').sort().join('') === (i + k).toString().split('').sort().join('') &&
          primes[i + k + k] &&
          (i).toString().split('').sort().join('') === (i + k + k).toString().split('').sort().join('')) {
            return +( (i).toString() + (i + k).toString() + (i + k + k).toString() );
        }
      }
    }
  }
};