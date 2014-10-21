var eulerFifty = function(n) {
  var isPrime = [false, false];
  var primes = [];

  for(var i = 2; i < n; i++) {
    isPrime.push(true);
  }

  for(i = 2; i <= Math.sqrt(n); i++) {
    if(isPrime[i]) {
      for(var j = i*i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Now we have an array prime checker

  for(i = 0; i < n; i++) {
    if(isPrime[i]) {
      primes.push(i);
    }
  }

  // and a list of primes

  var longestPrime;
  var maxLength = 0;
  var sum;
  for(i = 0; i < primes.length / 2; i++) {
    sum = 0;
    j = i;
    while(sum <= n) {
      sum += primes[j];
      if(isPrime[sum]) {
        if((j - i + 1) > maxLength) {
          longestPrime = sum;
          maxLength = j - i + 1;
        }
      }
      j++;
    }
  }

  console.log(maxLength);
  return longestPrime;


};
