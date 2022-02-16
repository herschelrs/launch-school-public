function cleanUp(str) {
  let collection = []
  const regex = /^[A-Za-z]+$/;
  for (let letter of str) {
    collection.push(regex.test(letter) ? letter : " ");
  }
  let output = [];
  for (let idx = 0; idx < collection.length; idx += 1) {
    if (!(collection[idx] === collection[idx + 1] && collection[idx] === " ")) {
      output.push(collection[idx]);
    }
  }
  return output.join("");
}

console.log(cleanUp("---what's my +*& line? aa   "));
console.log("this  ");