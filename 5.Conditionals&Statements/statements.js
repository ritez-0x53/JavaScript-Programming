
// if statement checks a condition and executes the code block only if the condition is true.
let age = 18;
if (age > 17) {
    console.log("You are an adult !");   
}

// if...else statement adds an alternative block of code that runs if the condition is false.
age = 8;
if (age > 17) {
    console.log("You are an adult !");
} else {
    console.log("You are a minor");
}

// if...else if...else Statement
// This structure allows multiple conditions to be checked in sequence. The first true condition’s code block runs, and the rest are ignored.
let marks = 90;
let grade;
if(marks >= 90) {
    grade = "Grade A"
} else if (marks >= 70) {
    grade = "Grade B"
} else if (marks >= 50) {
    grade = "Grade C"
} else {
    grade = "Fail"
}
console.log(grade);


// Ternary Operator (? :)
age = 34;
const status = age > 17 ? "adult" : "kid"
console.log(status);

// The switch statement is useful for selecting one of many code blocks to run based on the value of a variable. It’s often more readable than a long if...else if...else chain.

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the workweek.");
    break;
  case "Wednesday":
    console.log("Midweek.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Enjoy your day!");
    break;
}

