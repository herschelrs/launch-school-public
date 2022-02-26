function stringy(num) {
  let output = "";
  for (let id = 1; id <= num; id += 1) {
    output += id % 2;
  }
  return output;
}

console.log(stringy(5));
console.log(stringy(12));