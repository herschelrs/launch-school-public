function doubleConsonants(str) {
  const consonants = "qwfpgjlyrstdhnzxcvbkmQWFPGJLYRSTDHNZXCVBKM";
  function doubleIfConsonant(char) {
    if (consonants.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  }
  return str.split("").map(doubleIfConsonant).join("");
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""