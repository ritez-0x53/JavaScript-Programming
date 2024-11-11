
let singleQuote = 'Hello';
let doubleQuote = "Hello";
let backtick = `Hello`

// template Literals 
const greet = `${singleQuote}, Riteswar`
console.log(greet);

const text = "Hello, JavaScript"

// returns number of characters in a string
console.log(text.length);

// return the character at specified index
console.log(text.charAt(text.length-1));
console.log(text.charAt(0));

// converts string to uppercas and lowercas
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// indexOf(substring): Returns the index of the first occurrence of the substring. If not found, returns -1.
console.log(text.indexOf("JavaScript")); // 7
console.log(text.indexOf("not")); // -1

// includes(substring): Checks if the substring is present in the string (returns true or false).
console.log(text.includes("Hello"));    //true
console.log(text.includes("hello"));    //false

// startsWith(substring) and endsWith(substring): Check if a string starts or ends with the specified substring.
console.log(text.startsWith("He"));
console.log(text.endsWith("Script"));
console.log(text.endsWith("Scrips")); //false

// slice(start, end): Extracts a section of the string from start to end (non-inclusive).
console.log(text.slice(0,5)); // Hello

// substring(start, end): Similar to slice(), but doesn’t support negative indices.
console.log(text.substring(7 , text.length));

// substr(start, length): Extracts a substring starting from start with the specified length.
console.log(text.substr(7,4));





