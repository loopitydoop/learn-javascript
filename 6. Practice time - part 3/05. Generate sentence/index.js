// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
	arr_str = "";
	first_item = 1;
	for (let item of arr)
	{
		if (first_item != 1)
			arr_str += ", ";
		arr_str += item;
		first_item = 0;
	}
	console.log(`The ${arr.length} ${desc} are ${arr_str}`);
}

generateSentence("best fruits", ["Apples", "Bananas", "Pears"]);

// the other way is to check for the LAST entry instead to make sure you
// 	don't print ", " after that.
function generateSentence2(desc, arr) {
	baseStr = `The ${arr.length} ${desc} are `;
	lastIndex = arr.length - 1;
	for (i = 0; i < arr.length; i++)
	{
		baseStr += arr[i];
		if (i != lastIndex)
			baseStr += ", ";
		i++;
	}
	console.log("baseStr");
}

generateSentence("chonkest dawgs", ["garlic dawg", "big dawg", "round dawg"]);
// there is actualy strict inequality too "!==", where NO type conversion is performed
// 	before comparing the two values. Loose inequality "!=" performs type conversion.