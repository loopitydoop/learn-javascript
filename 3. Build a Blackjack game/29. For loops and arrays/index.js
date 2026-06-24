let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// iterate with for-of loop
for (const message of messages) {
    console.log(message);
}

// iterate by length of array
for (let i = 0; i < messages.length; i++) {
    console.log(messages[i]);
}

// iterate with forEach() method (cannot break out of this early):
messages.forEach((value, index, array) => {
    console.log(value,index,array);
});