"use strict";
/*Conditional Tests: Write a series of conditional tests. Print a statement describing
 each test and your prediction for the results of each test. Your code should look
 something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each
line evaluates to True or False.

• Create at least 10 tests. Have at least 5
 tests evaluate to True and another 5 tests evaluate to False.*/
// 05  tests evaluate to True
// Test 01
const Bus = "Black";
console.log("Is Bus == 'Black'? I predict True.");
console.log(Bus == "Black");
// Test 02
const variable = 10;
const variable1 = 1;
console.log("variable+variable1=='11'? I predict True.", variable + variable1 == 11);
// Test 03
let variable2 = 10;
console.log("variable2<='10'? I predict True.", variable2 <= 10);
// Test 04
console.log("variable2>='10'? I predict True.", variable2 <= 10);
// Test 05
console.log("variable2=='10'? I predict True.", variable2 <= 10);
// Test 06
console.log("variable2<='10' && variable2=='10'? I predict True.", variable2 <= 10 && variable2 == 10);
//5 tests evaluate to False.
const hourse = "Black";
console.log("Is hourse != 'Black'? I predict False.");
console.log(hourse != "Black");
// Test 02
const vlu = 10;
const vlu1 = 2;
console.log("vlu*vlu1=='21'? I predict False.", vlu * vlu1 == 21);
// Test 03
let vlu2 = 10;
console.log("vlu2>='11'? I predict False.", vlu2 >= 11);
// Test 04
console.log("vlu2<='0'? I predict False.", vlu2 <= 0);
// Test 05
console.log("vlu2=='19'? I predict False.", vlu2 == 19);
// Test 06
console.log("vlu2<='1' && variable2=='15'? I predict False.", vlu2 <= 1 && vlu2 == 15);
