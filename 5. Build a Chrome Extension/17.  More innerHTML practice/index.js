
const container = document.getElementById("container")

container.innerHTML = "<button>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
buttonEl = document.querySelector("button");

// this is actually a bit dodgy - by doing this, JS reconstrcuts everything in the container element, and all elements within it lose their event listeners
buttonEl.addEventListener("click", () => {
    console.log("button clicked!");

    const paragraphEl = document.createElement("p");
    paragraphEl.textContent = "Thank you for buying!";
    container.appendChild(paragraphEl);
})

// document.CreateElement("p")
// element.appendChild(element)