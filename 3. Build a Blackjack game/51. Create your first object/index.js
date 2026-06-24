// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let listing = {
    name: "Super Cool Castle",
    isAvailable: true,
    price: 300,
    tags: ["Entire home", "Pet-friendly", "Business-friendly"],
    guestOccupancy: 4,
    isSuperHost: true,
    images: ["img/castle1.png", "img/castle2.png"]
}

// dot notation
console.log(listing.tags);
console.log(listing.isAvailable);

// bracket notation
console.log(listing["tags"]);
console.log(listing.isAvailable);