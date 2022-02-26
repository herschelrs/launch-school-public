function leadingSubstrings(str) {
  let output = [];
  for (let idx in str) {
    output.push(str.slice(0, Number(idx) + 1));
  }
  return output.sort((x, y) => x.length - y.length);
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]