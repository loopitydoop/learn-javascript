// parameters are the undefined placeholder values when functions are defined (they are defined WITHIN the function, inner scope)
// arguments are values passed in when functions are invoked (they come from the outside of the function, outer scope)


// What are greeting and name? parameters
// What are "Howdy" and "James"? arguments
// What are num1 and num2? parameters
// What are 3 and 4? arguments


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)