//If you're reading this, this is a hideous solution, I apologize.

function afterMidnight(time) {
  let hours = Number(time.slice(0,2));
  let minutes = Number(time.slice(3));
  return ((hours * 60) + minutes) % 1440;
}

function beforeMidnight(time) {
  let hours = 23 - Number(time.slice(0,2));
  let minutes = (60 - Number(time.slice(3))) % 60;
  if (time === "24:00" || time === "00:00") {
    return 0;
  }
  return (hours * 60) + minutes;
}


console.log(afterMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
