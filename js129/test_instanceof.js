function Animal() {
}

Animal.prototype.move = function() {
  console.log("walking...");
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = new Animal();

myCat = new Cat("beans");
// console.log(myCat)
// myCat.move();
console.log(myCat instanceof Cat)
console.log(myCat.constructor)
console.log(myCat instanceof Animal)

