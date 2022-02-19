function union(arr1, arr2) {
  return Array.from(new Set(arr1.concat(...[arr2])));
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]