let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(elem => elem.slice().filter(val => val % 3 === 0)));