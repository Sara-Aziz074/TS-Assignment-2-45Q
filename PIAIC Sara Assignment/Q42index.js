"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the
  phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magician_Name = ["Alina", "Hania", "Rahela"];
function show_magicians(magician_Name) {
    for (const x of magician_Name) {
        console.log(x);
    }
    function make_great(magician_Name) {
        for (let i = 0; i < magician_Name.length; i++) {
            console.log(`The Great${magician_Name[i]}!`);
        }
    }
    make_great(magician_Name);
}
show_magicians(magician_Name);
