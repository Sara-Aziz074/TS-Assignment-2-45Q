/*Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then accept
 an arbitrary number of keyword arguments. Call the function with the required information
  and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly.
*/

interface car {
  car_name: string,
  car_number: number;
}

let car_object:car={
  car_name:"Cultus",
  car_number:1685
}


function greetin(car_object: { color: string,brand: string }):string {
  return ` Car  ${car_object.color} \t ${car_object.brand}` ;
}

console.log(`${car_object.car_name} \t ${car_object.car_number}`)

console.log(greetin({color:"Black",brand:"Honda"}))
