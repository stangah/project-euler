var eulerForty = function() {
  var digits = '';
  var total = 1;
  for (var i = 1; i <= 1e6; i++) {
    digits += i.toString();
  }
  for (i = 0; i < 7; i++) {
    total *= +digits[Math.pow(10, i) - 1];
  }
  return total;
};