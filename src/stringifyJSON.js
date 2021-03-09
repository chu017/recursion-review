// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


/*
console.log(JSON.stringify(1)); number -> 1
console.log(JSON.stringify(true)); boolean -> true
console.log(JSON.stringify("string")); string -> "string"

console.log(JSON.stringify([1, true, "string"])); array -> [1,true,"string"]
console.log(JSON.stringify({"x":1, "y":2})); object -> {"x":1,"y":2}
*/


var stringifyJSON = function(obj) {
  var output = '';

  // primitive value
  // if typeof obj === 'number' or 'boolean' ->
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return '' + obj;
  }

  // if typeof obj === 'string' ->
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (obj === null) {
    return '' + null;
  }

  // with undefined values and functions
  if (obj === undefined || typeof obj === 'function') {
    return '';
  }

  // input as collection
  // if Array.isArray(obj) is true
  if (Array.isArray(obj) === true) {
    //create an array for storage
    var results = [];
    //iterate over the array to make every value a string, push the value into the storage
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }
    //return storage array in string
    return '[' + results.join(',') + ']';
  }

  // if trypeof obj === obj ->
  // create a storage for obj keys

  // create a storage for obj values
  var arrOfKeyValues = [];

  if (obj instanceof Object) {
    var results = [];
    // console.log(JSON.stringify({x:1})); object -> {"x":1,"y":2}
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }

      var keyString = stringifyJSON(key);
      var valueString = stringifyJSON(obj[key]);
      // console.log(keyString);
      // console.log(valueString);

      results.push(keyString + ':' + valueString);
      // console.log(results);
    }
    return '{' + results.join(',') + '}';
  }
};

