let someFunc = _ => console.log(this.apple);

let foo = {
  apple: 3,
  howMany() {
    someFunc();
  }
}


foo.howMany();