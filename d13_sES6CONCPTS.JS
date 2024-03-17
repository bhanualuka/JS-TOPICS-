console.log("Jai Sai Master");
console.log("Jai Bapuji Maharaj");
/*   Some ES6 concepts 
 
=> Deep copy, Shallow copy
=> Spread operator , rest operator 
=> Destructuring --
{
    array to array 
    array to object 
   object to object 

   }

*/

// Deep copy --

// In Strings
/*

var varA = "hi";
var varB = varA;  // here it copies the value and reference(variable name) 
                  // this type of copyig is known as shalow copy , which point outs to one Mempry address 
console.log(varA);    
console.log(varB);  */

// In Arrays

/*  var arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1;

arr2[1] = 11;
console.log(arr1); // here arr2 changes with arr1
console.log(arr2);  */

// Destructuring
// In arrays

/* var a = [1, 2, 3, 4];

var [a, b, c, d] = a;
console.log(c); */

// In Objects
/* obj = {
  name: "bhanu",
  age: 23,
  hobbies: {
    Sports: "Cricket",
  },
};

var { hobbies } = obj;
var { Sports } = hobbies;
console.log(hobbies);
console.log(Sports); */
