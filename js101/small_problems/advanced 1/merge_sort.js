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

/*
P: write a function that sorts an array using merge sort
assumption: input array is all of the same type (this we're given)
  also assuming no empty arrays
input is an array, output is a new sorted array

E: not at all surprising

D/A: 
  initialize an empty array `output`
  split the input  array up into nested arrays and copy into `output`
    declare a function splitNested(arr)
      if arr is length 1, return arr
      else return it "cut in half", with either half passed to splitNested
        return [splitNested(arr.slice(0, Math.floor(arr.length / 2)), splitNested(arr.slice(Math.floor(arr.length / 2))))]
  declare a function sort()
    if both of the array's elements are "bottom level" arrays,
      then just merge them
    if they're mixed, return merge(the bottom level one, sort(long one))
    if neither are bottom level, return merge(sort(first), sort(second))
      
[ [3], [1]]
*/

function splitNested(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return([splitNested(arr.slice(0, Math.floor(arr.length / 2))),
    splitNested(arr.slice(Math.floor(arr.length / 2)))]);
  }
}

function sort(arr) {
  if (arr[0].length === 1 && arr[1].length === 1) {
    return merge(arr[0], arr[1]);
  } else if (arr[0].length === 1 && arr[1].length === 2) {
    return merge(arr[0], sort(arr[1]));
  } else if (arr[0].length === 2 && arr[1].length === 1) {
    return merge(arr[1], sort(arr[0]));
  } else {
    return merge(sort(arr[0]), sort(arr[1]));
  }
}

function mergeSort(arr) {
  let splitArr = splitNested(arr);
  return sort(splitArr);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]