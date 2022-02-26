let chars = "abc(def)gha".split("");
console.log(chars)
for (let idx = 0; idx < chars.length; idx += 1) {
  if (chars[idx] === ")") {
    for (let id2 = idx - 1; id2 >= -1; id2 -= 1) {
      if (chars[id2] === "(") {
        chars[id2] = "x";
        chars[idx] = "x";
        break;
      }
    }
  }
}
console.log(chars);
