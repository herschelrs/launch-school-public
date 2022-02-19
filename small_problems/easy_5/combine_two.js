function interleave(arr1, arr2) {
  let output = [];
  for (let idx in arr1) {
    output.push(arr1[idx], arr2[idx]);
  }
  return output;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]