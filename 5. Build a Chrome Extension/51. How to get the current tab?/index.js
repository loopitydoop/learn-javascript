let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
// I think we should talk to Chrome API on line 20 of the code, whenever we click the tab btn

// might have to use promises
tabBtn.addEventListener("click", function(){
    // this chrome.tabs only works in the context of the program running as a chrome extension
    // query for active tabs in the current (last focused) window
    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        myLeads.push(activeTab.url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads);
    });
    
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})