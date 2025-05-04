const defaultValues = (numbers) => {

  let [num1, num2 = 0] = numbers;

  return `${num1} and ${num2}`;

}



console.log(defaultValues([42]));