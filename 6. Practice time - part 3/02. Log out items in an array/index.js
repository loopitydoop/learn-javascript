let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.

function logArray(array) {
    for (let i; i < array.length; i++) {console.log(array[i]);}
}

// Call the function while passing in myCourses as an argument
logArray(myCourses);

// // either:
// for (let entry of array) {console.log(entry);}
// // or
// for (let [index, entry] of array.entries()) {console.log(entry);}
// // or
// array.forEach( (entry) => console.log(entry); )
// // or
// for (let i; i < array.length; i++) {console.log(array[i]);}