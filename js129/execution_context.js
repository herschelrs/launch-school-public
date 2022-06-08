let foo = {
  a: 1,
  bar() {
    function qux() {
      console.log(this.a);
    }
    qux();
  }
}

foo.bar();
console.log(foo.a)