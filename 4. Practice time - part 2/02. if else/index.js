let age = 67

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("free");
} else if (age < 18) {
    console.log("child discount");
} else if (age < 27) {
    console.log("student discount");
} else if (age < 67) {
    console.log("full price");
} else { // age must be > 66 at the conditional
    console.log("senior citizen discount");
}

console.log("switch statement now: ")

// for fun, trying a switch statement. Seems to work better with enum values
// it checks if the switch input === case expression, and runs the case if yes. If no, it moves down and checks the next case.
switch (true) {
    case (age < 6):
        console.log("free");
        break;
    case (age < 18):
        console.log("child discount");
        break;
    case (age < 27):
        console.log("student discount");
        break;
    case (age < 67):
        console.log("full price");
        break;
    case (age >= 67):
        console.log("senior citizen discount");
        break;
}