// getName();
// console.log(n);

// var n = 2;
// function getName() {
//   console.log("Hello, World!");
// }

var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 20;
  console.log(x);
}

console.log(NaN === NaN);

// closure

// A function binds together with its lexical environment.
// Closure is a function bundled with a lexical environment.
// Function along with its lexical scope forms closure.
// Function y was bound to the variables of x.

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
var another = outer();
// console.log(another);
another();
