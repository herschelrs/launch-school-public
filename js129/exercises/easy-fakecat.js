class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

// let fakeCat = Object.create(Cat.prototype)
// let fakeCat = Object.assign({}, Cat.prototype);
// console.log(fakeCat)
// // console.log(Cat.prototype)
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

let myCat = new Cat("beans");
console.log(Object.keys(myCat))
console.log(myCat.speaks())