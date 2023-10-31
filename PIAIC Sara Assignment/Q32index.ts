 /*Checking Usernames: Do the following to create a program that simulates how websites
   ensure that everyone has a unique username.*/

// Make a list of five or more usernames called current_users.

let current_users : string[] =["ayesha",  "hamna" ,  "rasba" ,  "laiba" ,  "ammara."]


/* Make another list of five usernames called new_users. Make sure one or two of the new
 usernames are also in the current_users list.
*/
let new_users : string [] =["Zubalia" ,  "Iram" , "AYESHA",  "Arfa" ,  "Yasen" ,  "Hamna"]


/* Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
  if a username has not been used , print a message saying that the username is available.
*/
/* Make sure your comparison is case insensitive, if 'John' has been used,
 JOHN should be accepted.*/

new_users.forEach(newUsername => {
    const usernameTaken = current_users.some(currentUsername => currentUsername.toLowerCase() === newUsername.toLowerCase());
    if(usernameTaken){
        console.log(`Username "${newUsername}" is not available. Please use a different username.`)
    }else{
        console.log(`Username "${newUsername}" is available.`)
    }
});
