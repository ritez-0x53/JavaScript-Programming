// arrays are ordered collections of values that can store multiple items under a single variable. Arrays can hold any data type (e.g., numbers, strings, objects, or even other arrays) and provide many methods for adding, removing, or manipulating elements.

const arr1 = [2,4,5,6,7,1,3];

const fruits = ["mango" , "banana" , "apple"];
console.log(fruits);

const numbers = new Array(2,3,4,5,6,7,2);
console.log(numbers);

// Accessing and Modifying Array Elements

console.log(numbers[0] , fruits[2] , numbers[5]);

// push(element): Adds an element to the end of the array.
fruits.push("pineapple");
console.log(fruits);
// pop(): Removes the last element and returns it.
let rmvd = fruits.pop();
console.log(fruits , rmvd);
// unshift(element): Adds an element to the beginning of the array.
fruits.unshift("grapes");
console.log(fruits);
// shift(): Removes the first element and returns it.
rmvd = fruits.shift();
console.log(fruits , rmvd);


// Combining and Slicing

// concat(array): Combines two or more arrays and returns a new array.
const firstArr = ["Munna" , "Munni"];
const secondArr = ["Billa" , "Billi"];
const combinedArr = firstArr.concat(secondArr);
console.log(combinedArr);
console.log(firstArr , secondArr);

// slice(start, end): Returns a portion of the array from start to end (non-inclusive).
console.log(fruits.slice(1,));

// Adding, Removing, or Replacing Elements
const newArr = ["Java" , "Python" , "Solidity"];

// splice(start, deleteCount, ...items): Adds, removes, or replaces elements in an array.
newArr.splice(1,2 , "JavaScript" , "C++");
console.log(newArr);

// Searching and Checking
// indexOf(element): Returns the first index of an element or -1 if not found.
console.log(fruits.indexOf("apple"));

// includes(element): Checks if an element is in the array.
console.log(fruits.includes("banana"));
console.log(fruits.includes("pineapple"));


// Iterating Over Arrays

// forEach(callback): Executes a function for each element.
fruits.forEach((fr)=>console.log(fr));

