function swapCase(str) {
  return str.split("")
    .map(x => x.toUpperCase() === x ?
      x.toLowerCase() :
      x.toUpperCase()).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"