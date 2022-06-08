let foo = {
  apple: 3,
  howMany() {
    let someFunc = _ => console.log(this.apple);
    return someFunc;
  }
}


let newFunc = foo.howMany();
newFunc();