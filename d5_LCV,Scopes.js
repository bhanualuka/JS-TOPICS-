console.log("Jai Sai master");
console.log("Jai Bapuji maharaj");

/*
        *LET, CONST, VAR* 
  VAR :
 --Var is a Global scope--
=> var can declare, redeclare, assign, reassign, initialize, reinitialize
   
 LET : 
 --Let is a Block scope--
=> let can be declare , assigin, reassign, initialize, But can not be "redeclare & reinitialize"

 CONST:
 --Const is Block scope--
 => Const can be initialize But can not be " declare, redeclare, assign, reassign,  initiliaze, reinitiliaze"

 ---------------------------------------------------------------------------------------------------------------------------------------------------

SCOPE: It is an Area which defines the life of Varibales with following keywords let,const,var. 

1. Global scope: 
    If we are declaring let, const, and var in the global scope we can acces(use) variables any where in the code 
    {Scope =life}

2. Block scope: 
=> VAR: 
  If we are declaring var in block scope we can acces(use) varibles inside the Block scope 
  and can access outside the Block scope (any where in the code)  But  

=> LET & CONST:
   If we are declaring let and Const in block scope we cannot assces(use) variable outside the block scope 
   but we can acess only in the inside the block scope

3. Functional scope:
=> VAR can be access only inside the functional scope But can not acess the outside the functional scope 
=> let & const  definently can not access the outside of the fucntional scope  

*/

// debugging

// debugging var

/* debugger;
var a;

a = 10;

console.log(a);

var b;

var b = 20;

var a = 11;

console.log(b);
console.log(a);

{
  console.log(b);
}

*/

// debugging the var and let

// debugger;
/*var a;

var a = 10;

let bb;

bb = 20; // assigned 

if (true) {
  console.log(bb);
}
bb = 40; // reassigned the value for let

console.log(a);
console.log(bb);
*/

// debbuging the Block scope of intilization of  let  of outside the block

// debugger;
// let a = 20; //
// if (true) {
//   var b;
//   console.log(a);
// }

// b = 20;
// console.log(b);

// debugging the block scope with let key word
/*debugger;
var a;

let bbb;

if (true) {
  let c;

  c = 10;

  console.log(c);
}

bbb = 100;
console.log(bbb);

a = 29;

console.log(c); */

// debugging the Functional block with  var  !important

/* debugger;
var d = 20;

function testing() {
  var e;        // var is inside the functional scope
  e = 30;
  return d;
}

rvalue = testing();

console.log(rvalue);

console.log(e); //  Var can not be access outside of the functional scope */
