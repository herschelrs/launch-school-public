function countOccurrences(arr) {
  let occurs = {};
  for (let value of arr) {
    occurs[value] = occurs[value] || 0;
    occurs[value] += 1;
  }
  for (let key in occurs) {
    console.log(`${key} => ${occurs[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);