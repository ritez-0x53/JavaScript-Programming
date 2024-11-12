// A function declaration creates a function that can be used anywhere in the code (hoisted to the top of its scope).
function greet(name = "Alice") {
    // Function declaration with default parameter
    console.log(`Hello, ${name} !  How are you ?`);
}
greet(); 
greet("Munna");

// A function expression assigns a function to a variable. This type of function is not hoisted, so it can only be used after it is defined.
let sum = function(num1 = 5,num2 = 8) {
    console.log(num1+num2);
}
sum(3,4);
sum();

// Arrow functions provide a shorter syntax for writing functions. They don’t have their own this context, making them useful in many situations, particularly when working with object methods or callbacks.
const square = (num = 2) => num**2;
console.log(square(5));
console.log(square());

// The return statement allows a function to produce a value. Once a return statement is executed, the function exits.
function fullName(first,last) {
    return first+" "+last;
}
console.log("Alice" , "Berly");

// Rest parameters allow a function to accept an indefinite number of arguments as an array.
function addAll(...nums) {
    console.log(nums);
    let total = nums.reduce((acc , num) => acc+num  ,0 )
    console.log(total);
}
addAll(3,5,6,7,8,1);

// Anonymous functions have no name and are typically used as arguments to other functions or as immediately invoked function expressions (IIFEs).
// Anonymous function as a callback
setTimeout(function() {
    console.log("Hello after 1 second");
  }, 1000);
  
  // IIFE
  (function() {
    console.log("This runs immediately!");
  })();
  

//   JavaScript functions create their own scope, meaning variables declared inside a function cannot be accessed outside of it. Functions can access variables in their outer (parent) scope, known as lexical scoping.  

function parentFun(){
    let num = 34;
    function childFun(){
        console.log("number accesed from declared parent",num);
    }
    childFun()
}
parentFun()

// A higher-order function is a function that takes another function as an argument or returns a function as a result. Array methods like map, filter, and reduce are examples of higher-order functions.
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]
let evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
let sumAll = numbers.reduce((acc, num) => acc + num, 0); // 10

/*
Arrow Functions vs. Regular Functions
Arrow functions have no this binding. They inherit this from their lexical scope.
Arrow functions cannot be used as constructors (i.e., with the new keyword).
Arrow functions do not have a prototype property.
*/