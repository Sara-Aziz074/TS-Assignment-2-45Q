/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be
  unchanged, return the new array and store it in a separate array. Call show_magicians() 
  with each array to show that you have one array 
of the original names and one array with the Great added to each magician’s name.
*/




const magician_Name = ["Alina", "Hania", "Rahela"];

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
   function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`The Great ${magicians[i]}`);
    }
    return greatMagicians;
}

const original_Magicians = magician_Name.slice();
const great_Magicians = make_great(original_Magicians);

console.log("Original Magicians:");
show_magicians(original_Magicians);

console.log("Great Magicians:");
show_magicians(great_Magicians);
export{}
