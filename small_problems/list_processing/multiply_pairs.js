function multiplyAllPairs(arr1, arr2) {
  let output = [];
  arr1.forEach(x => arr2.forEach(y => output.push(x * y)));
  return output.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));