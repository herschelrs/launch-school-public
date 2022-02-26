function crunch(str) {
  let output;
  if (str === "") {
    output = "";
  } else {
    output = str[0];
  }
  for (let id = 1; id < str.length; id += 1) {
    if (str[id] !== str[id - 1]) {
      output += str[id];
    }
  }
  return output;
}

crunch("dddddad");