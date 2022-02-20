function centerOf(str) {
  if (str.length % 2 === 0) {
    let idx = str.length / 2;
    return str[idx - 1] + str[idx];
  } else {
    return str[Math.ceil(str.length / 2) - 1];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"