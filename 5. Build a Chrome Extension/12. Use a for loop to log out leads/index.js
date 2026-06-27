let myLeads = ["www.google.com", "www.supercoolwebsite.com", "www.amazing.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
// })


// Log out the items in the myLeads array using a for loop 

myLeads.forEach((lead) => {
    console.log(lead);
})

// or: 
for (let i=0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

// or:
for (const lead of myLeads) {
    console.log(lead);
}

// or:
for (const [index, value] of myLeads.entries()) {
    console.log(value);
}