/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in
 a array, and then use a for loop to print the name of each pizza.*/
console.log("1st STEP")
 let favorite_Pizza:string[]=["FAJITA", "TIKKA" , "ITALIAN  CHEESE"]
 for(let i=0;i<favorite_Pizza.length;i++){
    console.log(favorite_Pizza[i])
 }
 
/*• Modify your for loop to print a sentence using the name of the pizza instead of 
printing just the name of the pizza. For each pizza you should have one 
line of output containing a simple statement like I like pepperoni pizza.*/
console.log("2nd STEP")

for(let i=0;i<favorite_Pizza.length;i++){
    console.log(`I  like ${favorite_Pizza[i]} pizza. `)
}

/*• Add a line at the end of your program, outside the for loop,
 that states how much you like pizza. 
 
 The output should consist of three or more lines about the kinds of pizza you
 like and then an additional sentence, 
 such as I really love pizza!
*/

console.log("3rd STEP")


for(let i=0;i<favorite_Pizza.length;i++){
console.log(` I  like ${favorite_Pizza [i]} pizza.
 It has a delicious combination of ingredients.\n it  has a unique taste.
 It has a different combination of ingredients.`)

}
if (favorite_Pizza.includes("FAJITA"))
{console.log(" 'FAJITA'\nThe combination of sizzling fajita flavors and melted cheese on a pizza \ncrust creates a unique fusion of Italian and Mexican cuisine, delivering a savory \n and spicy taste experience.  its marinated and grilled chicken or beef strips, \n bell peppers, onions, and a blend of Mexican spices taste.")}

if (favorite_Pizza.includes("TIKKA"))

{console.log("'TIKKA'\na tikka pizza is a flavorful and unique take on traditional pizza,\n with a spicy tomato sauce base \n a range of toppings commonly used in Pakistani cuisine.")}

 if (favorite_Pizza.includes("ITALIAN  CHEESE"))

{console.log("'ITALIAN  CHEESE'\n pizza is much more than just a food.\n  I love its key ingredients and toppings\n")}

console.log("\nI really love pizza!")

