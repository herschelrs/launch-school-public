let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/*
Object.keys(obj).forEach(key => {
  obj[key].forEach(str => {
    console.log(str.split("").filter(letter => {
      return "aeiou".includes(letter);
    }).join("")
  })
})
*/

Object.keys(obj).forEach(key => {
  obj[key].forEach(str => {
    console.log(str.split("").filter(letter => {
      return "aeiou".includes(letter);
    }).join(""));
  });
});