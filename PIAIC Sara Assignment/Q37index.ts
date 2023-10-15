/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with
 a message that reads I love TypeScript. Make a large shirt and a medium shirt with the
 default message, and a shirt of any size with a different message.
*/


    function make_Shirt(size: string, message: string ) {
       return console.log(`${size} ${message} `)
    }
    
    // Create a large shirt with the default message
    make_Shirt("Large Size Shirt","I love TypeScript");
    
    // Create a medium shirt with the default message
    make_Shirt("Medium Size Shirt ", "I love TypeScript");
    
    // Create a shirt of any size with a different message
    make_Shirt("Small Size Shirt", "TypeScript is awesome!");
    








