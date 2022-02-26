function multiplyList(arr1, arr2) {
  return Object.keys(arr1).map(x => arr1[x] * arr2[x]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]