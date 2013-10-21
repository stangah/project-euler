var eulerFortySeven = function(n) {
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

  var numbers = [];
  for (var i = 2; i < 1e6; i++) {
    if (!primes[i]) {
      var thisFact = {};
      var factCount = 0;
      for (var j = 0; primeArr[j] <= i / 2; j++) {
        if (i % primeArr[j] === 0) {
          thisFact[primeArr[j]] = true;
          factCount++;
        }
      }
      if (factCount === n) {
        if (numbers[numbers.length - 1] !== i - 1){
          numbers = [];
        }
        numbers.push(i);
        if (numbers.length === n) {
          return numbers[0];
        }
      }
    }
  }
  return null;
};