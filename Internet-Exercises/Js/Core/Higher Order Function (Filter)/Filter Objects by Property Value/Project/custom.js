function filterAdults(people) {

  let result = people.filter((element) => {
    return element.age > 20;
  })

  return result;

}


console.log(filterAdults([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 19 },
  { name: 'Charlie', age: 22 }
]));