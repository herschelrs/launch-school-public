function substrings(str) {
  let output = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= str.length; jdx += 1) {
      output.push(str.slice(idx, jdx));
    }
  }
  return output;
}

console.log(substrings('abcde'));