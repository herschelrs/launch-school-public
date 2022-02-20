function timeOfDay(minutes) {
  if (minutes < 0) {
    let hours;
    let mins = 60;
    hours = (24 + (Math.floor(minutes / 60) % 24)) % 24;
    //console.log(hours)
    mins += minutes % 60;
    return `${padTwoPlaces(hours)}:${padTwoPlaces(mins)}`;
  } else {
    let hours = 0;
    let mins = 0;
    hours += Math.floor(minutes / 60) % 24;
    mins += minutes % 60;
    return `${padTwoPlaces(hours)}:${padTwoPlaces(mins)}`;
  }
}

function padTwoPlaces(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));