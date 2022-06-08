let foo = {
  apple: 3,
  howMany() {
    (_ => console.log(this.apple))();
  }
}

foo.howMany();