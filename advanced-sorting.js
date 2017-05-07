var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort by value
function sortValue (a, b) {
  return b.id - a.id;
}

function sortName(a, b) {



  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }


  return b.age - a.age

}

var sort = students.sort(sortName);
console.log(sort);

