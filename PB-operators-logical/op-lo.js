console.log();
console.log("Declare two variables: \"a\" with the value of true, and \"b\" with the value of false.");
let a = true;
let b = false;
let result = (a === true) && (b === false) ? 'true' : 'false';
console.log("the result of true && true is:", result);
let result2 = (a === true) || (b === false) ? 'true' : 'false';
console.log("the result of true || true is:", result2);
let result3 = (a !== true) && (b !== false) ? 'true' : 'false';
console.log("the result of false && false is:", result3);
console.log();
console.log("Declare three more variables \"x\", \"y\", \"z\". Give these variables number values.");
let x = 3;
let y = 5;
let z = 7;
console.log("x is:", x, "y is:", y, "z is:", z);
console.log();
let firstResult = (x > z) && (x > z) ? 'it is greater than both y and z' : 'x is less than y and z';
console.log("the result of false && false is:", firstResult);
console.log();
let secondResult = (x !== y) ? 'x is not equal to y' : 'x is equal to y';
console.log("the result of true is:", secondResult);
console.log();
let thridResult = (z < y) || (z > x) ? 'z is more than y' : 'z is smaller than x';
console.log("the result of false || true is:", thridResult);
console.log();
let fourthResult = (x === z) || (x !== y) ? 'x is not equal to y' : 'x is equal to y';
console.log("the result of false || true is:", fourthResult);
console.log();
let fifthResult = (x >= 10) && (y <= 10) ? 'x is bigger or equal to 10' : 'y is minor or equal to 10';
console.log("the result of false && true is:", fifthResult);
console.log();
let sixthResult = ((x * y) < 100 ) || ((x * y) > 100) ? 'x * y is less than 100' : 'x * y is greater than 100';
console.log("the result of true || false is:", sixthResult);

let two = 2;
let three = 3;
console.log(two === three);
console.log(two !== three);
console.log(!(two === three));
console.log(!two === three);

// BOOLEAN INVERSION WITH EXCLAMATION MARK

let input = undefined;
let myVar = null || undefined || input || '2'; // define a default value with the || OR - truthy values will win over the falsy ('2' the string that comes after all falsies)
console.log(myVar);

