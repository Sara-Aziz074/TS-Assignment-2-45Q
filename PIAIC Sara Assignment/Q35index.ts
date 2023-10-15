/*Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out 
the name of each animal.*/
 const animals:string[]=["Markhor", "Deer" ,"Zebra"  ]


 for(let i=0;i<animals.length;i++){console.log(animals[i])}
/*• Modify your program to print a statement about each animal,
 such as A dog would make a great pet. */
 if(animals.includes("Markhor"))
 {console.log("The Markhor's notable feature is its distinctive twisted horns.")}

 if(animals.includes("Deer"))
 {console.log("Deer are known for their graceful agility and swift running abilities.")}

 if(animals.includes("Zebra"))
 {console.log("The zebra's striking black and white striped coat looks graceful.")}
 
 
 
 /*• Add a line at the end of your program stating what these animals have in common.
   You could print a sentence such as Any of these
   animals would make a great pet!


*/ for(let i=0;i<animals.length;i++){console.log(animals[i])}
console.log("These animals look graceful for their beauty!")