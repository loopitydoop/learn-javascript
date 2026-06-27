// Window.localStorage > localStorage is technically part of the Window object, but you can access it as an object directly with Javascript
// JSON.stringify(array) to store stuff in localStorage
// JSON.parse(arrayYouGotFromLocalStorage) to convert the JSON object back to its intended datatype


let myLeads = ["www.awesomelead.com"]

// storing myLeads
myLeads = JSON.stringify(myLeads);
localStorage.setItem("myLeads", myLeads); // diff methods available: setItem(), getItem(), removeItem()
console.log(`myLeads now has datatype: ${typeof myLeads}`); // should be a string

// retrieving myLeads from localStorage
myLeads = localStorage.getItem("myLeads");
myLeads = JSON.parse(myLeads);
console.log(`myLeads now has datatype: ${typeof myLeads}`) // should be an object (arrays are objects. typeof only returns primitive data types, or "object")



const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
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
