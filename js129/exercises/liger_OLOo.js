const lion = {
  isFriendly: true,
  inLionKing: true,
  roar() {return 'Hakuna Matata'},
};

const tiger = {
  enjoysSwimming: true,
  inJungleBook: true,
  chase() {return 'I am chasing the man-cub'}
};

const liger = Object.assign({}, lion, tiger)

console.log(liger.roar()) // 'Hakuna Matata'
console.log(liger.chase()) // 'I am chasing the man-cub'
console.log(liger.inLionKing) // true
console.log(liger.isFriendly) // true
console.log(liger.enjoysSwimming) // true
console.log(liger.inJungleBook) // true