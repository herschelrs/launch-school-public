function substrings(str) {
  let output = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= str.length; jdx += 1) {
      output.push(str.slice(idx, jdx));
    }
  }
  return output;
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return false;
  } else {
    return str === str.split("").reverse().join("");
  }
}

function palindromes(str) {
  let substr = substrings(str);
  return substr.filter(isPalindrome);
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));