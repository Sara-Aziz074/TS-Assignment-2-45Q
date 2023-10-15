"use strict";
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner. Then use your list
to print a message to each person, inviting them to dinner.*/
const GuestList = ["Ayesha", "Ammara", "iram",];
/*for(let i=0; i<GuestList.length;i++){
    console.log(`${i} ${GuestList [i]}  I would invite you a dinner friday 18-08-2023 at 7pm. `,"\n")
}*/
console.log("2nd method");
GuestList.forEach(function (name, index) {
    console.log(`${index}  ${name}, I would like to invite you  on a dinner friday 18-08-2023 at 7pm. `, "\n");
});
