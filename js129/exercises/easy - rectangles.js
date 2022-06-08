function Rectangle(length, width) {
  this.length = length;
  this.width = width;
  this.getWidth = function() {
    return this.width;
  };
  this.getLength = function() {
    return this.length;
  };
  this.getArea = function() {
    return this.width * this.length;
  };
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20