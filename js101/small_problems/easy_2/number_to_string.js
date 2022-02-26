function integerToString(num) {
  let arr = [];
  if (num === 0) {
    return "0";
  }
  while (num > 0) {
    arr.unshift(num % 10);
    num = (num - (num % 10)) / 10;
  }
  return arr.join("");
}

console.log(integerToString(1));