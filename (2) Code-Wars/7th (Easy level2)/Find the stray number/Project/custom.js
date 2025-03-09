function stray(numbers) {

  let uniqeElement = numbers.filter((element)=> {
    return numbers.indexOf(element) === numbers.lastIndexOf(element);
  })

  return Number(uniqeElement.join(""));

}


console.log(stray([1, 1, 2, 1, 1, 1, 1]));