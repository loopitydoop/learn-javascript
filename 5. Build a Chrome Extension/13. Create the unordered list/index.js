let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // render out the leads into ul-el
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i])
    }
    
})


for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " ";
}

// function renderLeads() {
//         // create <li>
//         li = document.createElement("li");
//         // update <li> text value to myLeads[i]
//         li.textContent = myLeads[i];
//         // append <li> to ul element
//         ulEl.appendChild(li);
// }


