let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters:\n");
let width = rlSync.question("Enter the width of the room in meters:\n");
let areaMeters = (length*width);
let printableAreaFeet = (areaMeters*(3.28084**2)).toFixed(2);
let printableAreaMeters = areaMeters.toFixed(2);
console.log(`The are of the room is ${printableAreaMeters} square meters (${printableAreaFeet} square feet).`);