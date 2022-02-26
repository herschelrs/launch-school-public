function multisum(num) {
  let output = 0;
  for (let i = 1; i <= num; i += 1) {
    if (i % 3 == 0 || i % 5 === 0) {
      output += i;
    }
  }
  return output
}

console.log(multisum(10));