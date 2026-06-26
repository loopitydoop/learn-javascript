function saveLead() {
    console.log("Button clicked!")
}

// addEventListener() workflow is more modern than onclick = function(). It lets you execute multiple functions at once!
// save element to a variable, as always
// ig if you do it this way, your JS logic is more separated from the html document as well. E.g. if you change function names here, you don't have to change it in the HTML doc as well.
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function() {
    console.log("Button clicked!");
});

