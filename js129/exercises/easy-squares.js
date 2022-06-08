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

function Square(side) {
  Rectangle.call(this, side, side);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25
