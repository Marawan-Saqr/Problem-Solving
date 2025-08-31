function sequence(fn) {

  return {
    take: function(n) {
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(fn(i));
      }
      return result;
    },

    takeWhile: function(pred) {
      let result = [];
      for (let i = 0; pred(fn(i)); i++) {
        result.push(fn(i));
      }
      return result;
    }
  }

}


console.log(sequence(n => n * n).take(10));
console.log(sequence(n => n).takeWhile(x => x < 10));
