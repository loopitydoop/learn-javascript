let randomNumber = Math.random() * 6

console.log(randomNumber)


/* 

In which range will our randomNumber be now?

From: 0 * 6 (inclusive)
To: 1 * 6 = 6 (exclusive)

so if you round down with Math.floor(), you can produce [0, 1, 2, 3, 4, 5] with equal probability

*/