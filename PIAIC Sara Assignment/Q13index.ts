/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
a list that stores several examples. Use your list to print a series of statements about these items
 such as “I would like to own a Honda motorcycle.”*/

 const listarray:string[]=[ 
    "Classic Car ","audi ","BMW ","Ferrari "," Porsche "," Arabic horse" 

 ]

/*for(let i=0; i < listarray.length;i++){
console.log(`“I would like to own a ${listarray[i]}`,i)
console.log(`“I would like to own a `+listarray[i])
}*/
listarray.forEach(
  function (value,a)  
{//array ki value leny ke lea variable lena prta hy "function (value)"
   // array ka index leny k lea bhi variable lena prta hy "function (value,a)"
console.log(`${a}  I would like to own a ${value}` ,"\n" )
});
