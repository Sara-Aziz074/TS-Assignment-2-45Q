"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write
an if-else chain.*/
Object.defineProperty(exports, "__esModule", { value: true });
/*• If the alien’s color is green, print a statement that the player just earned 5 points
for shooting the alien.*/
let alien_color = 'green';
if (alien_color === "green") {
    console.log("you just earned 5 points for shooting the alien.");
}
/*• If the alien’s color isn’t green, print a statement that the player just earned
10 points.*/
if (alien_color == "red") {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("You  just earned 10 points.");
}
/*• Write one version of this program that runs the if block and another that runs
the else block.*/
// this program  runs the if block.
if (alien_color === "green") {
    console.log("Are you part of the game?");
}
else {
    console.log("You just earned 5 points for shooting the alien.");
}
//  this program runs the else block.
let alien_C = "red";
if ((alien_C == "green")) {
    console.log("You just earned 5 points for shooting the alien.");
}
else {
    console.log("Yes! I'm...");
}
