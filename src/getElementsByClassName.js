// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // variable
  var output = [];

  // write an inner recursion
  var recursionFunction = function (input) {
    // check if input has a classlist and the className matches with the classList
    if (input.classList && input.classList.contains(className)) {
      output.push(input);
    }
    // iterate over the array to add nodes from childNodes if there is any
    for (var i = 0; i < input.childNodes.length; i++) {
      recursionFunction(input.childNodes[i]);
    }
  };
  recursionFunction(document.body);

  //return output
  return output;

};