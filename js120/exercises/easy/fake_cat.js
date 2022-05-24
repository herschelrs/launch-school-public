class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = {};
fakeCat.speaks = Cat.prototype.speaks;

console.log(fakeCat instanceof Cat); // logs true;
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.