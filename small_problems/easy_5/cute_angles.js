function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle % 1) *  60);
  let seconds = Math.floor((((angle % 1) * 60) % 1) * 60);
  return `${degrees}°${padZeros(minutes)}'${padZeros(seconds)}"`;
}

function padZeros(num) {
  if (String(num).length < 2) {
    return "0" + num;
  } else {
    return num
  }
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"