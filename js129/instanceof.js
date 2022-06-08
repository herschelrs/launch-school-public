function Car(year) {
}

Car.prototype.drive = function() {
  console.log("vroom vroom");
};

function Sedan(year) {
  this.year = year;
}

Sedan.prototype = new Car();

let myCar = new Sedan(1997);
console.log(myCar)
// myCar.drive();
// let someCar = new Car();
// console.log(myCar)
// console.log(Object.getPrototypeOf(myCar))
// for (let key in (someCar)) {
//   console.log(key);
// }
// console.log(myCar instanceof Sedan);
// console.log(Car.prototype)
// console.log(someCar)
// someCar.drive()
// myCar.drive();
// myCar.drive();