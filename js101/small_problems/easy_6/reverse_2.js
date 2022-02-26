function reverseWords(string) {
  function reverseIfFive(str) {
    return str.length >= 5 ? str.split("").reverse().join("") : str;
  }
  return string.split(" ").map(reverseIfFive).join(" ");
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"