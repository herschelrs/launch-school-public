let outputs = {3: [1, 2]};

function fibonacci(num) {
  let [last, current] = [1, 1];
  if (num < 3) {
    return 1;
  }
  let saved = Math.max(...Object.keys(outputs).map(x => Number(x))
    .filter(x => x <= num));
  //console.log((saved));
  if (saved === num) {
    return outputs[saved][1];
  } else {
    [last, current] = outputs[saved];
    for (let idx = saved; idx < num; idx += 1) {
      [last, current] = [current, last + current];
    }
  }
  outputs[num] = [last, current];
  return current;
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050