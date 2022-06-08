function Lion() {
  this.isFriendly = true;
  this.inLionKing = true;
}
Lion.prototype.roar = function() {return 'Hakuna Matata'};

function Tiger() {
  this.enjoysSwimming = true;
  this.inJungleBook = true;
}
Tiger.prototype.chase = function() {return 'I am chasing the man-cub'};

function Liger() {
  Lion.call(this);
  Tiger.call(this);
}
Object.assign(Liger.prototype, Tiger.prototype, Lion.prototype);

let liger = new Liger();

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true