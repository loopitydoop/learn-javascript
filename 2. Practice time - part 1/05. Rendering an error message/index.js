// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// get object for purchase button
let purchaseButton = document.getElementById("purchase-button");
let errorEl = document.getElementById("error");
console.log(errorEl);

function purchase() {
    console.log("button clicked");
    errorEl.innerText = "Something went wrong, please try again";
}