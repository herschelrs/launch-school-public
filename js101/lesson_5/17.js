function randomHexadecimal() {
  const higherHex = {10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f"};
  let value = Math.floor(Math.random() * 16);
  if (value < 10) {
    return String(value);
  } else {
    return higherHex[value];
  }
}

function generateUUID() {
  let out = [];
  for (let id = 0; id < 32; id += 1) {
    out.push(randomHexadecimal());
  }
  out.splice(8, 0, "-");
  out.splice(13, 0, "-");
  out.splice(18, 0, "-");
  out.splice(23, 0, "-");
  return out.join("")
}

console.log(generateUUID());