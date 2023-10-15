





/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/

// you simply made an object... Then accessed it through dot and bracket notation

const typeScript_Object={carName:"BMW",seater: 5, Mountain:"K2" , owner_Name:"SAAR"}


console.log(`Objects containing these items ${typeScript_Object.carName} ,
    ${typeScript_Object.seater} , ${typeScript_Object.owner_Name}`)


let data=JSON.stringify(typeScript_Object)
console.log(`Objects containing these items ${data}`)
