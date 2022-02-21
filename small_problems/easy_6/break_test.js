for (let idx = 0; idx < 10; idx += 1) {
  console.log(idx)
  if (idx === 5) {
    for (let id2 of "abcdefghijk".split("")) {
      console.log(id2)
      if (id2 === "e") {
        break;
      }
    }
  }
}