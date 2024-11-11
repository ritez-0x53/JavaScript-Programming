// Datatypes
// two types : primitive and non primitive(reference)


// Primitive types are immutable (cannot be changed), and each variable stores a value directly.

const number = 23;
const string = "this is a string";
const boolean = true;
const emptyValue = null;
let undefinedValue;

// Non-Primitive types hold a reference to a memory location where the object is stored.
let array = [1, 2, 3];         // Array
let obj = { key: "value" };    // Object
let greet = function() {       // Function
  console.log("Hi there!");
};