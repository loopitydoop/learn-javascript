const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
    if (greeting) {
        welcomeEl.textContent = `${greeting}, Per Harald Borgen 👋`    
    } else {
        welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"
    }
}

greetUser("what's up");