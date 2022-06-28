function forEach(arr, callback, thisArg) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    callback.call(thisArg, arr[idx], idx, arr);
  }
}

["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});