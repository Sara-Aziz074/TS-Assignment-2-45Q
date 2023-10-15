/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least 

one True and one False result for each of the following:*/


//• Tests for equality and inequality with strings

let   vlo:string="Sara" 
console.log(vlo==="Sara", typeof vlo)
console.log(vlo=="Sar", typeof vlo)

//• Tests using the lower case function

function  lo_Case(Name:string){
   console.log(`Hello ${Name}`);
    
}lo_Case("SARA".toLowerCase()+"!...")
/*• Numerical tests involving equality and inequality, greater than and less than, 

greaterthan or equal to, and less than or equal to*/

let v:number=7
//less than
console.log("v<1 should be true" ,v<10)

//greater than
console.log("v<1 should be false" ,v>10)


//greaterthan or equal to
console.log(  v>=2)

//less than or equal to
console.log( v<=6)


//• Tests using "and" and "or" operators

console.log(" 'v>8 && v<6' Should be false " , v>8 && v<6)

console.log(" 'v<9 && v<10' Should be false " , v<9 && v<10)

//• Test whether an item is in a array
let arr:string[]=["Sania", "Sana", "Miral", "Mishal", "Aira", "Anisha"];

let findItem:string=("Sana")

if (arr.includes(findItem)){
   console.log(`${findItem}  item is in a array. `)
}
//• Test whether an item is not in a array

let item_Not:string="Misha"

if (arr.includes(item_Not)){ console.log(`${item_Not} item is in a array.`)}

else

{ console.log(`${item_Not} an item is not in a array.`)

}





