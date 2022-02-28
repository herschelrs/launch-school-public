//the first one was my first solution, and is incorrect. I skipped to the
//example solution to see how they did the regex, then mostly copied it.
/*
function wordToDigit(str) {
  const digits = {one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, zero: 0};
  return str.split(" ").map(word => {
    if (Object.keys(digits).includes(word)) {
      return digits[word];
    } else {
      return word;
    }
  }).join(" ");
}
*/

function wordToDigit(str) {
  const digits = {one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, zero: 0};
  for (let key in digits) {
    let reg = new RegExp(key, "g");
    str = str.replace(reg, digits[key]);
  }
  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));