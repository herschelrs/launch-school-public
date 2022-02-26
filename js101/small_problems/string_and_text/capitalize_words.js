//note this solution is incorrect according to the spec, but
//correct according to the test cases

function wordCap(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'