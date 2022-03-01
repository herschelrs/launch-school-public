function triangle(angle1, angle2, angle3) {
  let angles = [...arguments];
  if (angles.reduce((x,y) => x + y) !== 180) {
    return "invalid";
  } else if (!angles.every(x => x > 0)) {
    return "invalid";
  } else if (angles.includes(90)) {
    return "right";
  } else if (Math.max(...angles) > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"