/***
 * JSON is a lightweight data format used for data exchange. JSON looks similar to JavaScript objects but has strict syntax rules:

Keys and strings must be in double quotes.
JSON supports only a limited set of data types: strings, numbers, objects, arrays, booleans, and null.
 */

// JSON structure 
console.log({
    "name" : "Alice",
    "age" : 24,
    "isStudent" : false,
    "address" : {
        "city" : "Guwahati",
        "zip" : "10002"
    },
    "hobbies" : ["coding" , "traveling"]
});

const object = {
    "name" : "Alice",
    "age" : 24,
    "isStudent" : false,
    "address" : {
        "city" : "Guwahati",
        "zip" : "10002"
    },
    "hobbies" : ["coding" , "traveling"]
}

// JSON.stringify(): Converts a JavaScript object to a JSON string.
let jsonString = JSON.stringify(object);
console.log(jsonString , typeof jsonString);

// JSON.parse(): Converts a JSON string back into a JavaScript object.
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject , typeof parsedObject);

