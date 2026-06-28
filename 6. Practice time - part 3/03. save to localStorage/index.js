// Save a value to localStorage
localStorage.setItem("names", JSON.stringify(["John", "Eren", "Mave"]));
// Delete your code and refresh the page
// Fetch your value from localStorage and log it out
console.log( JSON.parse( localStorage.getItem("names") ));