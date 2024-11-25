const skipElements = (elements) => {

  let [fruit1, , fruit3] = elements;

  return `${fruit1} then ${fruit3}`;


}



console.log(skipElements(["apple", "banana", "cherry", "date"]));