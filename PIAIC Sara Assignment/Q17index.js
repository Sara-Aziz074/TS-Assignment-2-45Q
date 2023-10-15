"use strict";
/*  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
 invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time
 you pop a name from your list, print a message to that person letting them know you’re sorry you
 can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/
//Exercise 16
const GuestList3 = ["Ayesha", "Ammara", "iram",];
GuestList3.forEach(function (name, index) {
    console.log(`${index} ${name},  I would  invite  you on a  dinner  friday  18-08-2023 at 7pm. `);
}); //Add a print statement at the end of your program stating the name of the guest who can’t make it.
// stating the name of the guest who can’t make dinner.
let absenttguest = "Ammara";
//if(absentGuest){console.log(`Guyes ${absentGuest} can’t join us on dinner `)}
console.log(`Guyes ${absenttguest} can't join us on dinner `);
console.log(GuestList3.length);
/*Modify your list, replacing the name of the guest who can’t make it
 with the name of the new person you are inviting*/
GuestList3[1] = "Afshan";
console.log(GuestList3);
console.log(GuestList3.length);
/*• Print a second set of invitation messages, one for each person who is still in your list.*/
GuestList3.forEach(function (name, index) {
    console.log(`${name}  Dear, I would invite you on a dinner friday 18-08-2023 at 7pm. `);
});
console.log(GuestList3.length);
/*• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table*/
console.log(`Hy guyes i found a bigger dinner table  there the place is  place more then 3 poeple.`);
//• Add one new guest to the beginning of your array.
GuestList3.unshift("Hina ");
console.log(GuestList3);
console.log(GuestList3.length);
//• Add one new guest to the middle of your array.
GuestList3.splice(3, 0, "Zarish");
console.log(GuestList3);
console.log(GuestList3.length);
//• Use append() to add one new guest to the end of your list.
GuestList3.push("Anee");
console.log(GuestList3);
console.log(GuestList3.length);
//• Print a new set of invitation messages, one for each person in your list. */
for (let i = 0; i < GuestList3.length; i++) {
    console.log(`${[i]} ${GuestList3[i]}  Dear, I like to invite you on a dinner friday 18-08-2023 at 7pm.`);
}
//Exercise 17
/*• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
 invite only two people for dinner.*/
//can invite only two people for dinner.
console.log("Sorry guyes, I can invite only two people for dinner, becouse i did't found bigger table at  last moment ");
/*• Remove guests from your list one at a time until only two names remain in your list. Each time
you pop a name from your list, print a message to that person letting them know you’re sorry you
can’t invite them to dinner.*/
while (GuestList3.length > 2) {
    let removedGuest = GuestList3.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
console.log("Final guest list:");
for (let i = 0; i < GuestList3.length; i++) {
    console.log(GuestList3[i]);
}
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
GuestList3.forEach(function (value) {
    console.log(`${value}  you'r still invited on a dinner friday 18-08-2023 at 7pm. `);
});
/*• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/
GuestList3.splice(0);
console.log(GuestList3);
