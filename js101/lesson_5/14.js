let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

console.log(Object.keys(obj).map(key => {
  if (obj[key].type === 'fruit') {
    return obj[key]["colors"].map(str => str[0].toUpperCase() + str.slice(1));
  } else {
    return obj[key].size.toUpperCase();
  }
}));