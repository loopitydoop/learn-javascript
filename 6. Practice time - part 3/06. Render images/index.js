// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

container = document.querySelector("#container");
let imgsDOM = "";
for (i = 0; i < imgs.length; i++)
{
	imgsDOM += `<img class="team-img" src="${imgs[i]}"></img>`;
}
container.innerHTML = imgsDOM;

// manipulating the DOM has a performance cost, so you want to call .innerHTML as little times as possible.