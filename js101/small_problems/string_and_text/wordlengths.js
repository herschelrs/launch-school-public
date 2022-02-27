function wordLengths(str = "") {
  if (str.length === 0) {
    return [];
  }
  let words = str.split(" ");
  return words.map(elem => elem + " " + elem.length);
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []