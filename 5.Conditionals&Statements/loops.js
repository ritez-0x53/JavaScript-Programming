
// for loop repeats a block of code a certain number of times, often used when the number of iterations is known.

for (let i = 0 ; i < 5 ;i++) {
    console.log(i);   
}

// while loop continues to execute as long as the condition remains true. It’s useful when the number of iterations isn’t predetermined.
let i = 0;
while (i < 5) {
    console.log("while count " , i);
    i++;
}

// do...while loop is similar to while, but it runs at least once even if the condition is initially false.

i = 0;
do {
    console.log("do while count" , i);
    i++;
}while(i<5);

// break: Immediately exits a loop or switch statement.
// continue: Skips the current iteration and moves to the next one.

for(let i = 6 ; i > 1 ; i--) {
    console.log(i);
    if(i === 4) {
        console.log("exiting the loop at 4");
        break;
    }
}

for (let i = 0; i < 5; i++) {
    if (i === 2) continue;         // Skips when i is 2
    console.log("Count:", i);
  }