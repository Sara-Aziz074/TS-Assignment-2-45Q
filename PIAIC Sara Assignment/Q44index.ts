/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call
  provides, and it should print a summary of the sandwich that is being ordered.
 Call the function three times, using a different number of arguments each time.
*/

function acceptsArray(...items: string[]) {
    console.log("Sandwich items:", items.join(", "));
}

let sandwich1: string[] = ["olive", "spice", "souces"];
let sandwich2: string[] = ["lettuce", "tomato"];
let sandwich3: string[] = ["turkey", "cheese", "mayonnaise"];

acceptsArray(...sandwich1);
acceptsArray(...sandwich2);
acceptsArray(...sandwich3);

