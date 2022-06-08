let someFunc = _ => console.log(this);

let foo = {
  apple: 3,
  howMany() {
    someFunc();
  }
}


foo.howMany();