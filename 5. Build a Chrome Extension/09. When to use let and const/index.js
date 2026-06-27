// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520 // basePrice is never reassigned in this script, can be const
const discount = 120 // discount is never reassigned in this, can be const
let shippingCost = 12 // shippingCost is reassigned in the script, must be let
let shippingTime = "5-12 days" // shippingTime is reassigned in the script, must be let

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost // I MISSED THIS! this is only defined once, can be const, actually

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
