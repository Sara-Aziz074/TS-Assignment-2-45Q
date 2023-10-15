"use strict";
/*Checkinew_users.map((name: string) => {
    if (current_users.includes(name.toLowerCase())) {
      console.log("username", name, "already in use. Please rename yourself");
    } else {
      console.log("username", name, "is available");
    }
  });ng Usernames: Do the following to create a program that simulates how
websites ensure thateveryone has a unique username.*/
//• Make a list of five or more usernames called current_users.
/*
let current_users=["ayesha",  "hamna" ,  "rasba" ,  "laiba" ,  "ammara."]
console.log(current_users)

/*• Make another list of five usernames called new_users. Make sure one or
 two of the new usernames are also in the current_users list.*/
//let new_users=["Zubalia" ,  "Iram" , "Ayesha",  "Arfa" ,  "Yasen" ,  "Hamna"]
//console.log(new_users)
/* • Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
 If a username has not been used, print a message saying that the username is available.*/
//sm2
/*• Make sure your comparison is case insensitive. If 'John' has been used,
 'JOHN' should not be accepted.
*/
/*new_users.map((name: string) => {
    if (current_users.includes(name)) {
      console.log(` case insensitive ${name} should not be accepted.`);
    
  }})

  


*/
/*1Checking Usernames: Do the following to create a program that simulates how websites
 ensure that everyone has a unique username.*/
// Make a list of five or more usernames called current_users.
const current_users = ["Hadi", "Tina", "Jerry", "Hanan", "Ali"];
/* Make another list of five usernames called new_users. Make sure one or two of the new
 usernames are also in the current_users list.
*/
const new_users = ["Ali", "Hazel", "Alina", "HANAN", "Farwa"];
/* Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
  if a username has not been used , print a message saying that the username is available.
*/
/* Make sure your comparison is case insensitive, if 'John' has been used,
 JOHN should be accepted.*/
new_users.forEach(newUsername => {
    const usernameTaken = current_users.some(currentUsername => currentUsername.toLowerCase() === newUsername.toLowerCase());
    if (usernameTaken) {
        console.log(`Username "${newUsername}" is not available. Please use a different username.`);
    }
    else {
        console.log(`Username "${newUsername}" is available.`);
    }
});
