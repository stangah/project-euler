var eulerThirtySix = function(limit) {
  var checkPalindrome = function(str) {
    for (var i = 0; i < Math.floor((str.length / 2)); i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };


  var sum = 0;
  for (var i = 0; i < limit; i++) {
    if ( checkPalindrome(i.toString()) && checkPalindrome(i.toString(2)) ) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
};

eulerThirtySix(1e6);