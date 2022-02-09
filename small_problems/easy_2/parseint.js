function numeralFromString(char) {
  switch (char) {
    case "1":
      return 1;
      break;
    case "2":
      return 2;
      break;
    case "3":
      return 3;
      break;
    case "3":
      return 3;
      break;
    case "4":
      return 4;
      break;
    case "5":
      return 5;
      break;
    case "6":
      return 6;
      break;
    case "7":
      return 7;
      break;
    case "8":
      return 8;
      break;
    case "9":
      return 9;
      break;
    case "0":
      return 0;
      break;
  }
}

function stringToInteger(string) {
  let total = 0;
  let letters = string.split("").reverse();
  for (let i in letters) {
    total += numeralFromString(letters[i]) * 10 ** i;
  }
  return total;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true