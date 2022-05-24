class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "Dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "Cat", status);
  }

  introduce() {
    return super() + " Meow meow!";
  }
}