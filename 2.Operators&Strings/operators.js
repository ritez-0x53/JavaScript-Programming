// Mathematical Operators

const addition = 4+7;
const subtract = 4-7;
const multiply = 4*7;
const division = 7/4;
const remainder = 7%4;
const exponent = 7**2;

// console.log(addition,subtract,multiply,division,remainder,power);

// Assignment Operators
let num = 23;
num+=1;
num-=1;
num*=2;
num/=2;
num**=2;
// console.log(num);

// Comparison Operators , returns either true or false
console.log(8=="8");    //true
console.log(8==="8")    //false , strictly equal
console.log(8!="8");    //false
console.log(8!=="8")    //true  ,strictly not equal
console.log(9>8); //true
console.log(8>9); //false
console.log(9<9); //false
console.log(9>=9) //true

// Increment Operator 
let i = 0;
console.log(++i);   // 1
console.log(i++);   // 1
console.log(--i);   // 1
console.log(i--);   // 1


// Logical Operator
console.log(true && true);  //true
console.log(true && false); //false
console.log(false && false);    //false

console.log(true || true);  // true
console.log(true || false); // true
console.log(false || false); // false
