/*  More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
 • Use append() to add one new guest to the end of your list.

• Print a new set of invitation messages, one for each person in your list. */

const GuestList2:string[]=["Ayesha","Ammara","iram",]
GuestList2.forEach(
    function(name:string,index:number){
        console.log(
             `${index} ${name},  I would  invite  you on a  dinner  friday  18-08-2023 at 7pm. ` )
    }
)//Add a print statement at the end of your program stating the name of the guest who can’t make it.

// stating the name of the guest who can’t make dinner.
let absentguest:string= "Ammara"
//if(absentGuest){console.log(`Guyes ${absentGuest} can’t join us on dinner `)}

console.log(`Guyes ${absentguest} can't join us on dinner `)
console.log(GuestList2.length)

/*Modify your list, replacing the name of the guest who can’t make it
 with the name of the new person you are inviting*/

 GuestList2[1]="Afshan"
 console.log(GuestList2)
 console.log(GuestList2.length)

 /*• Print a second set of invitation messages, one for each person who is still in your list.*/ 
 GuestList2.forEach(
    function(name:string,index:number)
    { console.log(`${name}  Dear, I would invite you on a dinner friday 18-08-2023 at 7pm. `)

    }
 )
 console.log(GuestList2.length)
/*• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table*/

console.log(`Hy guyes i found a bigger dinner table  there the place is  place more then 3 poeple.`)

//• Add one new guest to the beginning of your array.
 GuestList2.unshift("Hina ")
console.log(GuestList2)
console.log(GuestList2.length)
//• Add one new guest to the middle of your array.
GuestList2.splice(3,0,"Zarish")
console.log(GuestList2)
console.log(GuestList2.length)
//• Use append() to add one new guest to the end of your list.
GuestList2.push("Anee")
console.log(GuestList2)
console.log(GuestList2.length)
//• Print a new set of invitation messages, one for each person in your list. */
for(let i=0;i<GuestList2.length;i++)
{console.log(`${[i]} ${GuestList2[i]} Dear, I would invite you on a dinner friday 18-08-2023 at 7pm.`)}