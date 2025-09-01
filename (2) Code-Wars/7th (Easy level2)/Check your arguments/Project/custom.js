function objectType(obj) {
  if (obj === null) {
    return '[object Null]';
  } else if (arguments.length === 0) {
    return '[object Null]';
  } else if (obj === undefined) {
    return '[object Undefined]';
  } else {
    return Object.prototype.toString.call(obj);
  }
}




console.log(objectType());