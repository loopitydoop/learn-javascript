let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
// correct order: ["China","India","USA","Indonesia","Pakistan"]

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
// Array.unshift() adds an element to the BEGINNING of an array
// Array.shift() removes an element from the beginning of an array

// remove tuvalu
largeCountries.shift();
// add China to start of array
largeCountries.unshift("China");
// remove Monaco
largeCountries.pop();
largeCountries.push("Pakistan");

console.log(largeCountries);

largeCountries.forEach((value) => {
    console.log(value);
})

