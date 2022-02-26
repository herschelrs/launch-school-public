function utf16Value(str) {
  return str.split("").map(x => x.charCodeAt()).reduce((x,y) => x + y)  ;
}

console.log(utf16Value("Ω"));