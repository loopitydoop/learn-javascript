// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie();
}

// this MAY be ok but it'll accept any truthy values, which might be sloppy if your variables are meant to be strictly boolean
// if (likesDocumentaries || likesStartups) {
//     recommendMovie();
// }

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
