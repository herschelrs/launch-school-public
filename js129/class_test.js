class Apple {
  constructor(cultivar) {
    this.cultivar = cultivar;
  }

  function foo() {
    return this.cultivar;
  }
}

let myApple = new Apple('Gala');
console.log(myApple.foo())