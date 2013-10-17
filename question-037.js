var eulerThirtySeven = function() {
  var sum = 0;
  var numbers = [];
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

  var isTrunctablePrime = function(n) {
    var arr = n.toString().split('');
    while (arr.length > 0) {
      if (!primes[+arr.join('')]) {
        return false;
      }
      arr.pop();
    }
    arr = n.toString().split('');
    while (arr.length > 0) {
      if (!primes[+arr.join('')]) {
        return false;
      }
      arr.shift();
    }
    return true;
  };

  for (i = 10; i < 1e7; i++) {
    if (primes[i] && isTrunctablePrime(i)) {
      numbers.push(i);
      sum += i;
    }
  }
  console.log(numbers);
  return sum;
};

eulerThirtySeven();