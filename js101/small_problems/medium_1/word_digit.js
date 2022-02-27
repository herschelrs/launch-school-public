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

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));