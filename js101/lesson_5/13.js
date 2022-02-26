let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

console.log(arr.sort((el1, el2) => {
  let first = el1.filter(x => x % 2 === 1).reduce((x, y) => x + y);
  let second = el2.filter(x => x % 2 === 1).reduce((x, y) => x + y);
  return first - second;
}));