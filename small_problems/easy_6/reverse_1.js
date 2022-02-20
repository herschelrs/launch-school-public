function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseSentence('Reverse these words'));    // "words these Reverse"