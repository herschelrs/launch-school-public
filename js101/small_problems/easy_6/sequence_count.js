function sequence(num, base) {
  return Object.keys("a".repeat(num).split("")).map(x => Number(x) + 1).map(x => x * base);
}

console.log(sequence(5, -7));