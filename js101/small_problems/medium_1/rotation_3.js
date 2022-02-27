function rotateRightmostDigits(number, counts) {
  let rotateArray = arr => arr.slice(1).concat(arr[0]);
  let numerals = String(number).split("");
  let rotated = rotateArray(numerals.slice(numerals.length - counts));
  let output = numerals.slice(0, numerals.length - counts).concat(rotated);
  return Number(output.join(""));
}

function maxRotation(num) {
  for (let idx = String(num).length; idx > 0; idx -= 1) {
    num = rotateRightmostDigits(num, idx);
  }
  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845