function isPalindrome(str) {
  for (let idx = 0; idx < Math.ceil(str.length / 2); idx += 1) {
    if (str[idx] !== str[str.length - 1 - idx]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true