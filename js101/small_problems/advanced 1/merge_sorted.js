/*
P: take two sorted arrays and return a new array with all of elements
from both, in the correct order, without sorting the array you create
assumptions: ordering will make sense
  (all of the test cases have only numbers, but the way I plan on doing
    this could work with strings)

E: see below, makes sense

D/A: 
initialize a return array `output`
while the second array is not empty
  check if the 0th element of arr1 is less than same of arr2
    if so, shift it off and push it to output
  otherwise do the same for the other array
concatenate the remaining values from the first array to the output
return output
.
*/

function merge(arr1, arr2) {
  [arr1, arr2] = [Object.values(arr1), Object.values(arr2)];
  let output = [];
  while (arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  output = output.concat(arr1);
  return output;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]