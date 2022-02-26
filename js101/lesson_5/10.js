//note this solution is somewhat wrong, since sort() is destructive

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(list => {
  if (typeof list[0] === "string") {
    return list.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (b < a) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return list.slice().sort((a, b) => Number(b) - Number(a));
  }
}));