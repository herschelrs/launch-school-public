class Apple {
  constructor() {
    this.sweet = 'very';
  }

  printMe() { 
    console.log("some stuff");
  }
}

class GrannySmith extends Apple {
  constructor() {
    let whatever = 1234;
    super();
    this.juice = whatever;
  }
  
  upperPrint() {super.printMe();}
}

let foo = new GrannySmith();
foo.upperPrint();
console.log(foo.sweet)