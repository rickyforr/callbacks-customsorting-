var array = [10, 2, 5, 1, 9];

function compareNumbers(a, b) {
  return a - b;
}

var sort = array.sort(compareNumbers);
console.log(sort);
