function filter(arr, callback, thisArg) {
  let output = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    let value = callback.call(thisArg, arr[idx], idx, arr);
    if (value) {
      output.push(arr[idx]);
    }
  }
  return output;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]