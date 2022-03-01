function fridayThe13ths(year) {
  let dateVar = new Date(String(year));
  let badDays = 0;
  if (dateVar.getUTCDay() !== 5) {
    dateVar.setUTCDate(dateVar.getUTCDate() + 5 - dateVar.getUTCDay());
  }
  while (dateVar.getUTCFullYear() === year) {
    if (dateVar.getUTCDate() === 13) {
      badDays += 1;
    }
    dateVar.setUTCDate(dateVar.getUTCDate() + 7);
  }
  //console.log(dateVar);
  return badDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2