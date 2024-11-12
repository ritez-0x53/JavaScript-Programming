// Creating an Object
// You can create objects using object literals {} or the new Object() constructor.

let person = {
    name : "Munna Tripathy",
    fatherName : "Pankaj Tripathy",
    age : 34,
    isGoon : true,
    greet : ()=> {
        console.log("Hello , Me Munna Tripathy");
        
    }
}

console.log(person);

// Using the Object constructor
let car = new Object();
car.brand = "Toyota";
car.year = 2020;

// Accessing and Modifying Properties
console.log(person["fatherName"])
console.log(person.fatherName , person.age);

// Adding and Deleting Properties
person.isGoon = false;
person.job = "Politician"
console.log(person);


// Nested Objects
const region = {
    Assam : "Guwahati",
    BTAD : {
        Udalguri : "Khoirabari",
        Darrang : "Namkhola"
    }
}
console.log(region);
console.log(region.BTAD.Udalguri);
console.log(region["BTAD"]["Darrang"]);

// Objects can have functions as properties, known as methods.

const school = {
    schoolName : "AlmaBetter Edutech",
    location : "Bangalore",
    intro : function(){
        return `This is ${this.schoolName} school of coding`
    }
}
console.log(school.intro());

// Looping Over Properties
// You can loop over an object's properties using for...in or retrieve keys and values using Object.keys() and Object.values().

for (let key in school) {
    console.log(school[key]);   
}

console.log(Object.keys(school));
console.log(Object.values(school));
