function staggeredCase(str) {
  let chars = str.toLowerCase().split("");
  let upNext = -1;
  return chars.map((char) => {
    if (char.match(/[a-z]/i)) {
      upNext *= -1;
      return upNext > 0 ? char.toUpperCase() : char;
    } else {
      return char;
    }
  }).join("");
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ignore 77 the 444 numbers"));
/*
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/