function validateHello(greetings) {

  const hellos = {
    hello: 'english',
    ciao: 'italian',
    salut: 'french',
    hallo: 'german',
    hola: 'spanish',
    ahoj: 'czech republic',
    czesc: 'polish'
  };


  const cleanedGreetings = greetings.replace(/[^\w\s]/gi, '').toLowerCase().split(/\s+/); 


  for (let word of cleanedGreetings) {
    if (hellos[word]) {
      return true;
    }
  }
  return false;
}

console.log(validateHello("Hello"));