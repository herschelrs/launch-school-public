function runningTotal(arr) {
  let reduceToIndex = (ary, id) => ary.slice(0, id + 1).reduce((x,y) => x + y);
  let output = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    output.push(reduceToIndex(arr, idx));
  }
  return output;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []