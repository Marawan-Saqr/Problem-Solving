function greet(language) {
	switch (language) {
    case "english":
      return "Welcome";
    case "dutch":
      return "Welkom";
    case "czech":
      return "Vitejte";
    case "danish":
      return "Velkomst";
    case "estonian":
      return "Tere tulemast";
    case "finnish":
      return "Tervetuloa";
    case "flemish":
      return "Welgekomen";
    case "french":
      return "Bienvenue";
    case "german":
      return "Willkommen";
    case "irish":
      return "Failte";
    case "italian":
      return "Benvenuto";
    case "latvian":
      return "Gaidits";
    case "lithuanian":
      return "Laukiamas";
    case "polish":
      return "Witamy";
    case "spanish":
      return "Bienvenido";
    case "swedish":
      return "Valkommen";
    case "welsh":
      return "Croeso";
    default:
      return "Welcome";
  }
}



console.log(greet("Welcome"));