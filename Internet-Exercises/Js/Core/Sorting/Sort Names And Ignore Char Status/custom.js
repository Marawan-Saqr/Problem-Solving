const names = ["ali", "Zain", "mona", "Ahmed", "yara"];


// Default Sorting
let defaultSort = [...names].sort();
console.log(defaultSort);


// Case Insensitive Sort
let caseInsensitiveSort = [...names].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
console.log(caseInsensitiveSort);