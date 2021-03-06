var eulerThirtyOne = function() {
  var choices = [1,2,5,10,20,50,100,200];
  var count = 0;
  var recurse = function(array, sum) {
    array = array || [];
    sum = sum || 0;
    if (sum >= 200) {
      if (sum === 200) {
        count++;
      }
      return;
    }
    for (var i = 0; i <= (200 / array[0]); i++) {
      recurse(array.slice(1), sum + (i * array[0]) );
    }
  };
  recurse(choices.slice());
  return count;
};

eulerThirtyOne();