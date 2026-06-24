let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let unsortedShelf = document.getElementById("unsorted-shelf");
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
let isSorted = false;

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

for (let i = 0; i < fruit.length; i++) {
    unsortedShelf.textContent += fruit[i];
}

function sort() {
    if (isSorted === true) {
        return;
    }

    // clear unsorted shelf
    unsortedShelf.textContent = "";

    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        }
    }
    isSorted = true;
}