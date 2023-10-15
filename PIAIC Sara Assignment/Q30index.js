"use strict";
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log
in to a website.
 Loop through the array, and print a greeting to each user:*/
let usernames = ["Anam", "Admin", "Ammara", "Sara", "Aman"];
usernames.forEach(function (name) {
    console.log(` Greeting ${name}!! Welcome!`);
});
/*• If the username is 'admin', print a special greeting, such as Hello admin, would you
like to see a status report?*/
let admin = "Admin";
if (usernames.includes(admin)) {
    console.log(` Hello ${admin} , would you like to see a status report?  `);
}
/*• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging
in again.*/
if (usernames.includes(admin)) {
    console.log(` Hello ${admin} , would you like to see a status report?  `);
}
else {
    console.log("such as Hello Ammara, thank you for logging in again.");
}
