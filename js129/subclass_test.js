class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    let foo = Math.random();
    super(name);
    this.sound = "bark";
    this.something = foo;
  }
}

let buddy = new Dog("buddy");
console.log(buddy)