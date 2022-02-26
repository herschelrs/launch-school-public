function findFibonacciIndexByLength(len) {
  let index = 2;
  let previous = 1n;
  let current = 1n;
  while (current.toString().length < len) {
    index += 1;
    [previous, current] = [current, previous + current];
  }
  return index;
}
console.log(findFibonacciIndexByLength(2n));    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n));   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));