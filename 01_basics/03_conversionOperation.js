let score = "33abc"
// let score = null
// let score = undefined

// TO check type of variable
console.log(typeof score);
console.log(typeof(score));

// Conversion of number
let valueInNumber = Number(score);
console.log(typeof valueInNumber);

// NaN == not a number
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "Aamir" => true

let xNumber = 33

let stringNumber = String(xNumber)
console.log(stringNumber);
console.log(typeof stringNumber);