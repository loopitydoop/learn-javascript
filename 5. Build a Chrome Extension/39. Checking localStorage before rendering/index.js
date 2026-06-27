let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

// 1. Check if leadsFromLocalStorage is truthy
if (leadsFromLocalStorage) {
    // 2. If so, set myLeads to its value and call renderLeads()
    myLeads = leadsFromLocalStorage;
    renderLeads;
}
// if leadsFromLocalStorage is falsy, it's because localStorage.getItem("myLeads") returned null
// since the local storage of myLeads was non-existent. JSON.parse() then coerces it into "null" before
// parsing it as null again, and this null value is falsy.

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
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
