let countEl = document.getElementById("count-el")
let savedEl = document.getElementById("saved-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    saveValue = count;
    console.log(saveValue);
    savedEl.innerText = saveValue;
}


