/*
P: write a function that takes a two dimensional array representing an
MxN matrix and returns a new array representing the same matrix transposed

assumptions: 
- no input validation necessary, every test case will represent a valid matrix
- m and n are relatively small, probably < 5, but certainly <10000

E: straightforward from the test cases given

D: I'm basically going to copy these from the previous example, will just use a
two-dimensional array.

A: 
initialize a variable `output` with empty arrays representing rows of the transposed matrix
  first initialize `output` with an empty array, and then iterate over the first element of the input array,
  and push empty arrays as elements for each loop iteration
iterate over the rows of the input
  iterate over the indices of the row
    push row[index] to output[index]
*/

function transpose(matrix) {
  let output = [];
  matrix[0].forEach(_ => output.push([]));
  for (let row of matrix) {
    for (let idx in row) {
      output[idx].push(row[idx]);
    }
  }
  return output;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
// console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]