function isLeapYear(year) {
  if (year >= 1752) {
    return (div_400(year) || ! div_100(year)) && div_4(year);
  } else {
    return (year % 4 == 0);
  }
  
}
/*
let foo = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];
foo.forEach(x => console.log(String(x) + "\t" + String(isLeapYear(x))));
*/