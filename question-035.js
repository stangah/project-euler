var eulerThirtyFive = function(limit) {
  var primes = [false, false];
  for (var p = 2; p < limit; p++) {
    if (primes[p] === undefined) {
      primes[p] = true;
      for (var q = p * 2; q < limit; q += p) {
        primes[q] = false;
      }
    }
  }

  var count = 0;
  for (var i = 2; i < limit; i++) {
    if (primes[i]) {
      var str = i.toString();
      for (var j = 0; j < str.length; j++) {
        str = str.slice(1) + str[0];
        if (!primes[+str]) {
          break;
        }
        if (j === str.length - 1) {
          count++;
        }
      }
    }
  }
  return count;
};

eulerThirtyFive(1e6);