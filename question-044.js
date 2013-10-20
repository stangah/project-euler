var eulerFortyFour = function() {
  var pentNum = [];
  var pentNumObj = {};
  var min = 1e9;
  for (var i = 1; i < 1e4; i++) {
    var num = 0.5 * i * (3*i - 1);
    pentNum.push(num);
    pentNumObj[num] = true;
  }
  for (i = 0; i < pentNum.length; i++) {
    for (var j = i; j < pentNum.length; j++) {
      pentA = pentNum[i];
      pentB = pentNum[j];
      if (pentNumObj[pentB - pentA] && pentNumObj[pentB + pentA]) {
        min = Math.min(min, pentB - pentA);
      }
    }
  }
  return min;
};