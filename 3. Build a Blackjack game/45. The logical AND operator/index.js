let hasCompletedCourse = true
let givesCertificate = false

// this is clunky, nesting if statements is kind of hard to read
// if (hasCompletedCourse === true) {
//     if (givesCertificate === true) {
//         generateCertificate()
//     }
// }

// use the logical AND operator "&&" to combine the conditions
if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

// can simplify by just stating the variables, since they are booleans
// if (hasCompletedCourse && givesCertificate) {
//     generateCertificate()
// }

function generateCertificate() {
    console.log("Generating certificate....")
}


