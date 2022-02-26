//note this solution is somewhat wrong, since sort() is destructive

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(arr.map(list => {
  if (typeof list[0] === "string") {
    return list.sort();
  } else {
    return list.sort((a, b) => Number(a) - Number(b));
  }
}));