function sumSquareDifference(count) {
  let sum = 0;
  let sumSquares = 0;
  for (let idx = 1; idx <= count; idx += 1) {
    sum += idx;
    sumSquares += idx ** 2;
  }
  let squareSum = sum ** 2;
  return squareSum - sumSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150