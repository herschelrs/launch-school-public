function rotateRightmostDigits(number, counts) {
  let rotateArray = arr => arr.slice(1).concat(arr[0]);
  let numerals = String(number).split("");
  let rotated = rotateArray(numerals.slice(numerals.length - counts));
  let output = numerals.slice(0, numerals.length - counts).concat(rotated);
  return Number(output.join(""));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917