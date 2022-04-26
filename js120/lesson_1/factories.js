function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read,
    getDescription() {
      return `${this.title} was written by ${this.author}. I have${this.read ? '' : "n't" } read it.`;
    },
    readBook() {
      this.read = true;
      return undefined;
    }
  };
}

let mythos = createBook("Mythos", "Stephen Fry");
let pretty = createBook("Me Talk Pretty One Day", "David Sedaris");
let aunts = createBook("Aunts aren't Gentlemen", "PG Wodehouse");
console.log(mythos.getDescription());
mythos.readBook();
console.log(mythos.getDescription());
