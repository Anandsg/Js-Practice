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

var i = 1;
setTimeout(() => {
  console.log(i);
}, 1000);

// setTimeout is a method that calls a function or evaluates an expression after a specified number of milliseconds.

function set() {
  // if we use let i will print 1 to 5.
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i); // using var i will print 6 five times.
    });
  }
}
set();

function time() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
time();
