let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(arr.filter(obj => Object.values(obj).every(list => {
  return list.every(x => x % 2 === 0);
})));