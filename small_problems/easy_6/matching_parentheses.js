function isBalanced(str) {
  let chars = str.split("");
  for (let idx = 0; idx < chars.length; idx += 1) {
    if (chars[idx] === ")") {
      for (let id2 = idx - 1; id2 >= -1; id2 -= 1) {
        if (chars[id2] === "(") {
          chars[id2] = "x";
          chars[idx] = "x";
          break;
        }
        if (id2 === -1) {
          return false;
        }
      }
    }
  }
  return !chars.includes("(");
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);