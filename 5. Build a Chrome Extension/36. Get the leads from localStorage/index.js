let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );
// Store it in a variable, leadsFromLocalStorage

// PROBLEM ARISES: you need to evaluate whether leadsFromLocalStorage is null 
// (when there is no key called "myLeads" in LocalStorage), or if it is an array
// because if it is null, you don't wanna renderLeads - the for loop will prob return a 
// TypeError when you try to iterate through it and this completely halts Javascript script execution

// Log out the variable
console.log(myLeads);

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
