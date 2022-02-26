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

function signedIntegerToString(num) {
  if (num > 0) {
    return "+" + integerToString(num);
  } else if (num < 0) {
    return "-" + integerToString(num * -1);
  } else {
    return "0";
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");