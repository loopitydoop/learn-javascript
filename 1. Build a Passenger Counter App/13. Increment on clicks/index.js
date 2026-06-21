// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
let count = 0;

// var names are in camelCase for JS variables
// "working with the DOM"
let countEl = document.getElementById("count-el");

// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count += 1;
    console.log(count);

    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count; 
}



