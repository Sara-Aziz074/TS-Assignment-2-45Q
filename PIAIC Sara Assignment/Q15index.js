"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
a new set of invitations. You’ll have to think of someone else to invite.

•Start with your program from Exercise 14.
Add a print statement at the end of your program stating the name of the guest who can’t make it.
•Modify your list, replacing the name of the guest who can’t make it
 with the name of the new person you are inviting.
 • Print a second set of invitation messages, one for each person who is still in your list.
*/
/****let ntavlble="Iram"
console.log(`Guyes ${ntavlble} can't join us on a dinner`)
//replacing the name of the guest who can’t make it with new one
let av=GuestList1.splice(1,0,"Afshan")
//GuestList1,${a}
console.log(`${av}  Dear, I would invite you on a dinner friday 18-08-2023 at 7pm.`)
for(){}****/
const GuestList1 = ["Ayesha", "Ammara", "iram",];
GuestList1.forEach(function (name, index) {
    console.log(`${index} ${name},  I would  invite  you on a  dinner  friday  18-08-2023 at 7pm. `);
}); //Add a print statement at the end of your program stating the name of the guest who can’t make it.
// stating the name of the guest who can’t make dinner.
let absentGuest = "Ammara";
//if(absentGuest){console.log(`Guyes ${absentGuest} can’t join us on dinner `)}
console.log(`Guyes ${absentGuest} can’t join us on dinner `);
/*Modify your list, replacing the name of the guest who can’t make it
 with the name of the new person you are inviting*/
GuestList1[1] = "Afshan";
console.log(GuestList1);
/*• Print a second set of invitation messages, one for each person who is still in your list.*/
GuestList1.forEach(function (name, index) {
    console.log(`${name}  Dear, I would invite you on a dinner friday 18-08-2023 at 7pm. `);
});
