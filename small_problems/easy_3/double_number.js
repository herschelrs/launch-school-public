function isDoubleNum(num) {
  let len = String(num).length;
  if (len % 2 !== 0) {
    return false;
  } else if (String(num).slice(0, len / 2) !== (String(num).slice(len / 2))) {
    return false;
  } else {
    return true;
  }
}

function twice(num) {
  if (isDoubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676