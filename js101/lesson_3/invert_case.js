function invertCase(str) {
  const caps = "QWFPGJLUYARSTDHNEIOZXCVBKM";
  let outputArr = []
  for (let letter of str) {
    if (caps.includes(letter)) {
      outputArr.push(letter.toLowerCase());
    } else {
      outputArr.push(letter.toUpperCase());
    }
  }
  return outputArr.join("");
}

let munstersDescription = "The Munsters are creepy and spooky.";
console.log(invertCase(munstersDescription));
console.log(invertCase("this"));