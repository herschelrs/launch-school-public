function letterPercentages(str) {
  let chars = str.split("");
  for (let idx in chars) {
    if (chars[idx].toUpperCase() === chars[idx].toLowerCase()) {
      chars[idx] = "n";
    } else if (chars[idx].toUpperCase() === chars[idx]) {
      chars[idx] = "u";
    } else {
      chars[idx] = 'l';
    }
  }
  let lower = chars.filter(x => x === "l").length;
  let upper = chars.filter(x => x === "u").length;
  let neither = chars.filter(x => x === "n").length;
  let total = lower + upper + neither;
  return {lowercase: (100 * lower / total).toFixed(2),
    uppercase: (100 * upper / total).toFixed(2),
    neither: (100 * neither / total).toFixed(2)};
}

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));