// Brute force solution, runs out of bits

var eulerTwentyNine = function() {
  var solutions = {};
  var count = 0;
  for (var a = 2; a <= 5; a++){
    for (var b = 2; b <= 5; b++){
      var temp = Math.pow(a, b);
      solutions[temp] = temp;
    }
  }
  for (var key in solutions){
    count++;
  }
  return count;
};

eulerTwentyNine();

////////////////////////////////

// Counting solution, not picking up weird interference on multiples

var eulerTwentyNine = function(n) {
  var numbers = {};
  var count = 0;
  for (var i = 2; i <= n; i++) {
    if (numbers[i] !== false) {
      count += n - 1;
      var j = i * i;
      while (j <= n) {
        numbers[j] = false;
        count += Math.ceil(n / 2);
        j *= i;
      }
    }
  }
  return count;
};

eulerTwentyNine(100);