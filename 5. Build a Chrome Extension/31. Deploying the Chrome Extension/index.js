// json: used by devs to send data, often from a server to client
// manifest.json configures the app and provides data about it. Used by Web Extensions - Browser relationships, 
// Web Apps: W3C Web App Manifest Specification, for web apps to tell devices how to install the webpage to the device as if it were a native app
// JSON keys have to be written in double quotes. They are technically STRINGS, written in the Javascript Object format.

// chrome extension will only be as wide as it needs to be (which is the size of the smallest element + padding and margins)


// chrome://extensions/
// activate developer mode
// "load unpacked" extension > select the folder with the Chrome Extension files
// unfortunately, the app doesn't actually save any of the stuff in myLeads. So when you close it, all leads are lost.

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
