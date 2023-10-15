/*Intentional Error: If you haven’t received an array index error in one of your programs

yet,try to make one happen. Change an index in one of your programs to produce an index

 error.Make sure you correct the error before closing the program.*/



const intentional_Error_Array:string[] = ["Sania", "Sana", "Miral", "Mishal", "Aira", "Anisha"];
    //                              0       1        2        3         4       5
   
// produce an index error.

    //method 1  
console.log(intentional_Error_Array [6]);

//method 2
let value:string = intentional_Error_Array[6];

if (value === undefined) {
    console.log("index error");
} else {
    console.log(value);
}

// correct the error before closing the program.
console.log(intentional_Error_Array [4]);


