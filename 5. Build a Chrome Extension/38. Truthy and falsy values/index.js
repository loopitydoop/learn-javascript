// Boolean() tests whether the object is truthy or falsy, returning true for truthy object and false for falsy objects
console.log(  Boolean("")   ) // falsy
console.log(  Boolean("0")  ) // truthy (it's a non-empty string)
console.log(  Boolean(100)  ) // truthy
console.log(  Boolean(null) ) // falsy
console.log(  Boolean([0])  ) // truthy (arrays are truthy since they're objects, even if the array is empty)
console.log(  Boolean(-0)   ) // falsy