// open dev tools > go to applications > go to local Storage
// can see keys, values on your device stored by the website.
// if you run localStorage.clear() on the dev tools console, you can see all the key value pairs in localStorage() have been cleared.
// this means javascript can interact with the key value pairs in local storage!
// localStorage.setItem("myLeads", "https://www.google.com/")
// now this key:value pair exists in local storage, and it persists even if you refresh the website!

let myLeads = []
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
