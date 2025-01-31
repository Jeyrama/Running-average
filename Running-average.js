/*
Create a function runningAverage() that returns a callable function object. 
Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;
*/


// Solution

function runningAverage() {
  let accumulator = 0;
  let size = 0;

  return function(number) {
    accumulator += number;
    size += 1;
    
    return Math.round(accumulator / size * 100) / 100;
  };
}

// or

function runningAverage() {
  let sum = 0;
  let num = 0;
  
  return function (n) {
    sum += n;
    num += 1;
    return parseFloat( (sum / num).toFixed(2) );
  };
}