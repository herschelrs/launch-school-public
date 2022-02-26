let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function iterateValues(obj) {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
}

console.log(arr.map(obj => iterateValues(Object.assign({}, obj))));