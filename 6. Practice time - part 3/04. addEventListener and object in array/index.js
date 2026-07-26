let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
button = document.querySelector("button");

// Use addEventListener() to listen for button clicks
button.addEventListener("click", () => 
	{
		for (let entry of data)
		{
			if (entry.player == "Jane")
			{
				console.log(entry.score);
				break;
			}
		}
	} );

// Log Jane's score when the button is clicked (via data)
// Gotta remember 
// (1) (document.querySelector is quite powerful and flexible)
// (2) the syntax for iterating through elements in an array is "let ELEMENT of ARRAY",
// 	emphasis on "OF", it's not "in".
// (3) All that coding in C is paying off, I'm more familiar with using loops and logic. The
// 	syntax in JS is pretty similar.