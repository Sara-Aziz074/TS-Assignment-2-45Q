/*Seeing the World: Think of at least five places in the world you’d like to visit.*/



//• Store the locations in a array. Make sure the array is not in alphabetical order.

const array:string[]=["Saudi Arabia","Hunza","Swat", "Gilgit","Kashmir","Turkey","Doha"]
console.log("array", array)

//• Print your array in its original order.
const origenalorder:string[]=["Saudi Arebia","Hunza","Swat", "Gilgit","Kashmir","Turkia","Duha"]
console.log("origenalorder", origenalorder)

//• Print your array in alphabetical order without modifying the actual list.

let AlphabeticalArray:string[]=[...origenalorder].sort()
console.log("Alphabetical Order",AlphabeticalArray)

//• Show that your array is still in its original order by printing it.

console.log("Original Array after Sorting", origenalorder)

//• Print your array in reverse alphabetical order without changing the order of the original list.
let reverseAlphabeticalarray:string[]=[...AlphabeticalArray].sort().reverse()

console.log("reverse alphabetical order",  reverseAlphabeticalarray)
//2nd method reverse
console.log("2nd")

let reverseAlphabeticalarra2y:string[]=[...AlphabeticalArray].reverse()

console.log("reverse alphabetical order",  reverseAlphabeticalarray)

//• Show that your array is still in its original order by printing it again.
console.log("still original order", origenalorder )

//• Reverse the order of your list. Print the array to show that its order has changed.
let Reverseorigenalorder:string[]=[...origenalorder].reverse();

console.log("Reversed origenalorder Array , its order has changed ",Reverseorigenalorder)

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

let againReverseorigenalorder:string[]=[...Reverseorigenalorder].reverse()

console.log("list  back to its original order", againReverseorigenalorder )

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

let  storedAlphabeticalArray:string[]=[...againReverseorigenalorder].sort()
console.log(" its order has been changed in 'SORTED' " ,storedAlphabeticalArray  )

/*• Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its
order has changed.*/

let stored_Reverse_alphabetical_Order:string[]=[...storedAlphabeticalArray].reverse()
console.log(" 'the list to show that its order has changed in 'stored_Reverse_alphabetical_Orde'",
stored_Reverse_alphabetical_Order )