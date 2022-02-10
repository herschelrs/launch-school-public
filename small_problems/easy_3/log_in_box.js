function logInBox(str) {
  let len = str.length;
  console.log("+-" + "-".repeat(len) + "-+");
  console.log("| " + " ".repeat(len) + " |");
  console.log("| " + str + " |");
  console.log("| " + " ".repeat(len) + " |");
  console.log("+-" + "-".repeat(len) + "-+");
}

logInBox("this is a thingum");