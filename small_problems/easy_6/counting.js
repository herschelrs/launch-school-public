function sequence(num) {
  return Object.keys("a".repeat(num).split("")).map(x => Number(x) + 1);
}

console.log(sequence(5));