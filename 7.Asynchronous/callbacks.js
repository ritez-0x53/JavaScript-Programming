// A callback is a function passed as an argument to another function and executed after some operation has completed. Callbacks were the earliest way to handle asynchronous tasks in JavaScript.

function parentFun(callback){
    setTimeout(()=> {
        console.log("this is parent function");
        callback();
    },3000)
}

function childFun(){
    setTimeout(()=> {
        console.log("this is child function");
    },1000)
}

// parentFun(childFun)

// callback hell 
// One of the drawbacks of callbacks is that they can lead to callback hell when there are multiple nested callbacks. This can make the code hard to read and maintain.
function getData(callback) {
    setTimeout(() => {
        console.log("Data retrieved");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000);
}

function saveData(callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback();
    }, 1000);
}

// getData(() => {
//     processData(() => {
//         saveData(() => {
//             console.log("All operations completed!");
//         });
//     });
// });


// 
function task(taskname , callback){
    setTimeout(()=> {
        console.log(taskname , "done");
        callback();
    } , 2000)
}

task("first" , ()=> {
    task("second" , ()=> {
        task("third" , ()=> {
            console.log("all done");
            
        })
    })
})
