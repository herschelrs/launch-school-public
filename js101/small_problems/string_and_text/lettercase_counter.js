function letterCaseCount(str) {
  let output = {lowercase: 0, uppercase: 0, neither: 0};
  for (let char of str.split("")) {
    if (char.toLowerCase() === char.toUpperCase()) {
      output.neither += 1;
    } else if (char.toLowerCase() === char) {
      output.lowercase += 1;
    } else {
      output.uppercase += 1;
    }
  }
  return output;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }