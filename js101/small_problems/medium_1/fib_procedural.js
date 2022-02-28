function fibonacci(num) {
  let [last, current] = [1, 1];
  if (num < 3) {
    return 1;
  }
  for (let idx = 3; idx <= num; idx += 1) {
    [last, current] = [current, last + current];
  }
  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(25));
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050