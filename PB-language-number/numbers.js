console.log('');
console.log('1. Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.');
console.log('');
let string = 'empest';
let number = 7;
console.log(number + string);
console.log('');
console.log('in this case the \"+\" works as a unifier and has no concatenation function.');
console.log('');

console.log('');
console.log('2a. Create a variable with the value of "1005". Convert it to a number.');
console.log('');
let stringIntDigit = "1005";
const newIntNumber = parseInt(stringIntDigit);
console.log(newIntNumber);
console.log('');
console.log('2b. Create a variable with the value of "10.05". Convert it to a number.');
console.log('');
let stringFloatDigit = "10.05";
const newFloatNumber = parseFloat(stringFloatDigit);
console.log(newFloatNumber);

console.log('');
console.log('3. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.');
console.log('');
let isEven = 30;
let isEven2 = 939;
let isEven3 = 40.9;
console.log('30', isEven%2==0 ? 'is even' : 'is not even');
console.log('939', isEven2%2==0 ? 'is even' : 'is not even');
console.log('40.9', isEven3%2==0 ? 'is even' : 'is not even');
