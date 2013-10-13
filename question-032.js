var eulerThirtyTwo = function() {
  var seed = [1,2,3,4,5,6,7,8,9];
  var sum = 0;
  var recurse = function(seed, m1, m2) {
    var stackFocus;
    if (m1.length < 2) {
      stackFocus = m1;
    } else if (m2.length < 3) {
      stackfocus = m2;
    } else {
      var p = (+m1.join('') * +m2.join('')).toString().sort();
      seed.sort();
    }
    for (var i = 0; i < seed.length; i++) {

    }
  };
  recurse(seed, [], []);
  return sum;
};