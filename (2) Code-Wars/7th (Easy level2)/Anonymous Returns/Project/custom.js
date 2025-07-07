let name = 'The Window';

let alpha = {
  name : 'My Alpha',
  getNameFunc : function() {
    return function() {
      return alpha.name;
    };
  }
};

console.log(alpha.getNameFunc()());