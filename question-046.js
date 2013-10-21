var eulerFortySix = function() {
  var primes = {};
  var last = 9;
  var i, j, newTry;
  for (i = 2; i < 1e6; i++) {
    if (primes[i] === undefined) {
      primes[i] = true;
      j = i + i;
      while(j < 1e6) {
        primes[j] = false;
        j += i;
      }
    }
  }
  for (i = 15; i < 1e6; i += 2) {
    if (!primes[i]) {
      var notMatch = false;
      for (j = i - 2; j > 0; j -= 2) {
        if (primes[j]) {
          newTry = Math.sqrt((i - j) / 2);
          if (parseFloat(newTry) === parseInt(newTry, 10)) {
            notMatch = true;
            break;
          }
        }
      }
      if (notMatch === false) {
        return i;
      }
    }
  }
  return false;
};