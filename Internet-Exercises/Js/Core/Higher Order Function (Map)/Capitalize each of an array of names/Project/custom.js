function capitalizeNames(arr){

  let result = arr.map(function(element, index, array) {

    let finalResult = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    return finalResult;

  }, 10)


  return result;

}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]