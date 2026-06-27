// const credits = 0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("Sorry, you have no credits 😭")
// }

// truthy
// all objects (even empty arrays)
// all numbers which aren't 0 or -0
// strings

// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN -> rarely ever used

let currentViewers = null // why not set this to an empty array? 
// It's bc if you do if (currentViewers) {}, as a condition to evaluate whether there
// are current viewers, it will wrongly return a truthy value when you put an empty array.

currentViewers = ["jane", "nick"]

currentViewers = null

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}