function sum(num) {
  return String(num).split("").map(x => Number(x)).reduce((x,y) => x + y);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
