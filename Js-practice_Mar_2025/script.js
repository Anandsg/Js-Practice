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

// if interviewer asks to use var keyword only in the above code then we can use closure.
function time() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x); // it will print 1 to 5.
      }, x * 1000);
    }
    close(i);
  }
}
time();

// passing another variable as arguement to the inner function.
function outer(b) {
  var a = 10;
  function inner() {
    console.log(a, b);
  }
  return inner;
}

const output = outer("hello");
output();

// creating outest function and returning outer function.
function outest() {
  var a = 10;
  function outer(b) {
    var c = 20;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }
  return outer;
}
const output1 = outest()("hello");
output1();

// Callbacks
setTimeout(() => {
  console.log("timer");
}, 3000);

function xx(yy) {
  console.log("xx");
  yy();
}

xx(function yy() {
  console.log("yy");
});

// map, filter, reduce

const users = [
  { firstName: "anand", lastName: "gadagin", age: 26 },
  { firstName: "deepika", lastName: "padukone", age: 30 },
  { firstName: "arun", lastName: "sharma", age: 40 },
];

// map
const output2 = users.map((user) => {
  return user.firstName + " " + user.lastName;
});

console.log(output2);

// filter
const filteredUsers = users.filter((user) => user.age < 30);

filteredUsers.map((user) => {
  console.log(user.firstName);
});

// call back

const cart = ["shoes", "shirts", "pants"];

function createOrder(callback) {
  console.log("Creating order...");

  setTimeout(() => {
    console.log("Order created successfully.");

    function proceedToPayment(callback) {
      console.log("Proceeding to payment...");

      setTimeout(() => {
        console.log("Payment processed successfully.");

        function orderSummary(callback) {
          console.log("Generating order summary...");

          setTimeout(() => {
            console.log("Order summary generated.");

            function updateWallet() {
              console.log("Updating wallet...");

              setTimeout(() => {
                console.log("Wallet updated successfully.");
              }, 500);
            }

            updateWallet(); // Calling updateWallet inside orderSummary
          }, 1000);
        }

        orderSummary(); // Calling orderSummary inside proceedToPayment
      }, 1500);
    }

    proceedToPayment(); // Calling proceedToPayment inside createOrder
  }, 1000);
}

// Initiating the process
createOrder();
