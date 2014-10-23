
  var makePrimes = function(max, min) {
    min = min || 0;
    min = Math.max(0, min);

    // Prime number boilerplate
    var isPrime = [];
    var primes = [];
    for(var i = min; i <= max; i++) {
      isPrime.push(true);
    }

    for(i = min; i < isPrime.length; i++) {
      if(i < 2) { isPrime[i] = false; }

      if(isPrime[i]) {
        for(var j = i*i; j < isPrime.length; j += i) {
          isPrime[j] = false;
        }
      }
    }

    for(i = 0; i < isPrime.length; i++) {
      if(isPrime[i]) {
        primes.push(i);
      }
    }

    return {
      test: isPrime,
      list: primes
    };
  };

  var getCombos = function(arr) {
    if(arr.length < 2) { return arr; }
    var result = [];

    var recurse = function(toUse, soFar) {
      if(soFar.length) { result.push(soFar.slice()); }
      if(!toUse.length) { return; }
      for(var i = 0; i < toUse.length; i++) {
        var n = soFar.slice();
        n.push(toUse[i]);
        var t = toUse.slice(i + 1);
        recurse(t, n);
      }
    };

    recurse(arr.slice(), []);
    return result;
  };

  // To find an n prime family
  var eulerFiftyOne = function(n) {

    var primes = makePrimes(1e7);
    var p = primes.list;
    var t = primes.test;
    var o;

    for(var i = 0; i < p.length; i++) {
      if(p[i] > 10) {
        var s = p[i].toString().split('');
        o = {};
        for(var ia = 0; ia < s.length - 1; ia++) {
          o[s[ia]] = o[s[ia]] || [];
          o[s[ia]].push(ia.toString());
        }
        // For numbers that exist in i
        for(var j in o) {
          var combos = getCombos(o[j]);
          var c = 0;
          var a = s.slice();
          // For all digits
          for(var r = 0; r < 10; r++) {
            for(var z = 0; z < combos.length; z++) {
              if(r === 0 && +combos[z][0] === 0) { break; }
              for(var q = 0; q < combos[z].length; q++) {
                a[combos[z][q]] = r.toString();
              }
            }
            var temp = parseInt(a.join(''), 10);
            if(!t[temp]){ c++; }
            if(c > (10 - (+o[j][0] === 0) - n)) { break; }
          }
          if(c <= (10 - (+o[j][0] === 0) - n)) { return s.join(''); }
        }
      }
    }
  };

  console.log(eulerFiftyOne(8));
