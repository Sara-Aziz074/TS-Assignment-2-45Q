"use strict";
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.*/
let Alien_C = "green";
if (Alien_C === "green") {
    console.log("You! earned 5 points.");
}
else {
    "Try again";
}
//• If the alien is yellow, print a message that the player earned 10 points.
let Alien_C2 = "yellow";
if (Alien_C2 == "yellow") {
    console.log("Hi! Hina you  earned 10 points. ");
}
//• If the alien is red, print a message that the player earned 15 points.
let Alien_C3 = "red";
if (Alien_C3 == "red") {
    console.log("Hajraa! You earned 15 points. ");
}
/*• Write three versions of this program, making sure each message
is printed for the appropriate color alien.*/
// version=>1 using if else if method
let Alien$Color = "green";
if (Alien$Color == "red") {
    console.log("you  earned '15' points.");
}
else if (Alien$Color == "green") {
    console.log("You! earned '5' points.");
}
else if (Alien$Color == "yellow") {
    console.log("You earned '10' points.");
}
else {
    console.log("you have no scroe and are out of the game.");
}
// version=>2  using switch method
let Alien_Clr = "yewllo";
switch (Alien_Clr) {
    case "green":
        console.log("You earned '5' points.!");
        break;
    case "yewllo":
        console.log("You earned '10' points.!");
        break;
    case "red":
        console.log("You earned '15' points.!");
        break;
    default:
        console.log("the alien color is undefine so score is 'zero'");
        break;
}
// version=>3 
let alienColor = "red";
const alienScores = {
    green: "You earned '5' points!",
    yellow: "You earned '10' points!",
    red: "You earned '15' points!",
};
if (alienScores.hasOwnProperty(alienColor)) {
    console.log(`${[alienColor]} , You earned 15 points!`); // key => red, print value?
}
else {
    console.log("The alien color is undefined, so your score is 'zero'.");
}
