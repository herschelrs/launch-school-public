function century(year) {
  let cent = Math.ceil(year / 100);
  
  return cent.toString() + ending(cent);
}

function ending(centuryNum) {
  const endings = {1: "st", 2: "nd", 3: "rd", 4: "th", 5: "th", 6: "th", 7: "th", 8: "th", 9: "th", 0: "th"};
  if ([11,12,13].includes(centuryNum % 100)) {
    return "th";
  } else {
    return endings[centuryNum % 10];
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"