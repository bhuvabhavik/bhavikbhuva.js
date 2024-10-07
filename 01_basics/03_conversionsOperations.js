let score = 33

// console.log(typeof score); //number
// console.log(typeof(score)); // number

let score1 = "33" //string

// console.log(typeof score1); //string
// console.log(typeof(score1)); // string

let valueInNumber = Number(score1)
// console.log(typeof(valueInNumber)); // number

// console.log();
// console.log("IF SCORE IS alphanumeric or string ");
let score2 = "33abc" //string 
let valueInNumber2 = Number(score2)
// console.log(typeof(valueInNumber2)); // number
// console.log(valueInNumber2); // NaN -> not a number //special type // we can check is/isnot NaN


// console.log();
// console.log("IF SCORE IS NULL");
let score3 = null //string 
let valueInNumber3 = Number(score3)
// console.log(typeof(valueInNumber3)); // number
// console.log(valueInNumber3); // 0 => it converted Null to Zero


// console.log();
// console.log("IF SCORE IS UNDEFINED");

let score4 = undefined //string 
let valueInNumber4 = Number(score4)
// console.log(typeof(valueInNumber4)); // number
// console.log(valueInNumber4); //NaN

// console.log();
// console.log("IF SCORE IS BOOLEAN");

let score5 = true //string 
let valueInNumber5 = Number(score5)
// console.log(typeof(valueInNumber5)); // number
// console.log(valueInNumber5); // 1

/*

"33" => 33
"33abc" => NaN
true => 1; false => 0;

*/


// console.log("Number to Boolean");
let isLoggedIn = 1
booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// console.log("String <= Number");

let someNumber = 33;
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);

//************************OPERATIONS************************************************** */
console.log("OPERATIONS");
let value = 10
let negValue = -value

// console.log(value);
// console.log(negValue);
 // -----> Basic maths operations
// console( 2 + 2 )
// console(10 - 2)
// console(2 * 22)
// console(2 ** 2) //2 rays to 2 //power
// console(24 % 2) // remainder


let str1 = "Bhuva"
let str2 = " Bhavik"
let str3 = str1 + str2 //string concatenation


console.log(str3);



























