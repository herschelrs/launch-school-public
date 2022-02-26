function triangle(num) {
  for (let line = 1; line <= num; line += 1) {
    console.log(" ".repeat(num - line) + "*".repeat(line));
  }
}

triangle (9);
triangle(5);