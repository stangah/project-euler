/*
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.
*/



var eulerTwentySeven = function(){
  var max = [0,0,0]; // Going to be of the form [a, b, n] where n is the consecutive number of primes created by that formula
  var output = 1;
  var test;
  var max = [0,0,0];
  var a = 0;
  var memoPrime = {};

  for (a = -999; a < 1000; a++){
    for (var b = -999; b < 1000; b++){
      for (var n = 0; ; n++){
        output = Math.pow(n, 2) + (a * n) + b;
        if (output < 0){
          break;
        }
        if (memoPrime[output] === undefined){
          memoPrime[output] = isPrime(output);
        }
        test = memoPrime[output];
        if (!test){
          if (n > max[2]){
            max = [a,b,n];
          }
          break;
        }
      }
    }
  }
  return max[0] * max[1];
};

var isPrime = function(n){
  if (n % 2 === 0){
    return false;
  } else {
    for (var i = 3; i < n / 2; i++){
      if (n % i === 0){
        return false;
      }
    }
    return true;
  }
};
