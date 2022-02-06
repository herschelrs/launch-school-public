function isLeapYear(num) {
  return (div_400(num) || ! div_100(num)) && div_4(num) ;
}
/*
let foo = [2016, 2015, 2100, 2400, 240000, 240001, 2000, 1900, 1752, 1700, 1, 100, 400];
foo.forEach(x => console.log(String(x) + "\t" + String(isLeapYear(x))));
*/