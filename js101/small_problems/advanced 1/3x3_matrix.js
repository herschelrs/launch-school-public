/*
# Problem
take 3x3 matrix represented as nested array and calculate the transposed version and return that
return value is a _new_ array
don't modify the input value
I'm assuming all of the elements are Numbers, probably integers. This probably won't make a difference
I'm assuming all the inputs will be valid matrices

# Examples
not much to say, I remember transposition from LinAlg

# Data structures
Obviously the output is just a two dimensional array. Intermediately I might use another array structure.
y
# Algorithm
Initialize a new 2-dimensional array outArr with the rows being empty arrays,
Iterate over the rows of the input array,
  for each of those rows, iterate over its elements and push them to each successive row of the outArr
return outArr
*/

function transpose(matrix) {
  let outArr = [[], [], []];
  for (let row of matrix) {
    for (let idx in row) {
      outArr[idx].push(row[idx]);
    }
  }
  return outArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]