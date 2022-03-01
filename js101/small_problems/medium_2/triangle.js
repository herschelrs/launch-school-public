function triangle(...args) {
  let sides = [...arguments].sort((a, b) => a - b)
  if (sides.some(x => x <= 0)) {
    return "invalid";
  } else if (sides[2] >= sides[0] + sides[1]) {
    return "invalid";
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return "equilateral";
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return "isosceles";
  } else {
    return "scalene";
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"