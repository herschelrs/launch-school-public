function buyFruit(arr) {
  return arr.map(x => Array(x[1]).fill(x[0])).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));