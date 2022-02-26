function wordSizes(str) {
  if (str.length === 0) {
    return {};
  }
  let lengths = {};
  for (let word of str.split(" ")) {
    if (lengths[word.length]) {
      lengths[word.length] += 1;
    } else {
      lengths[word.length] = 1;
    }
  }
  return lengths;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}