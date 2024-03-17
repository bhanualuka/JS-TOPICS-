console.log("Jai sai master");
console.log("Jai bapuji maharaj");

// console.log(" Jai sai master ");
// console.log(" jai Bapuji maharaj");

// function greet(l, m) {
//   // function key word
//   // console.log(" Iam Function ");
//   return l * m; // statements        return will print only in console.log() or we can "return" value by using only console.log()
// }

// // console.log(greet(5,5)); // calling function  by function name // here return will print becuse we logged console(console.log())
// console.log("iam between the function");
// console.log(greet(5, 2));
// greet();
// greet();
// greet();

// console.log("............... FUNCTIONS.................. ");
// // FUNCTIONS

// // syntax :
// // function functionName( parameter1, paramerter2, parameter3,.... parametern ){

// //   // code to be execute
// //   return ;

// // function fntName(x, y) {
// //   var result = x + y;
// //   return result;
// // }

// // console.log(fntName(5, 5));

// // function fntName(x, y) {
// //   var result = x + y;
// // without using return we will get undefined

// // }

// //    console.log( fntName( 4,5))

// // we can also function as shown below

// function fntName(b, y) {
//   var target = b + y;
//   console.log("  sum of  " + b + "," + y + ":" + target);
// }
// fntName(5, 5);

// fntName(88, 69);

// //   function expression :
// //  fun =  function functionName( parameters ){
// //    code to be execute
// //    reutrn;

// // }

// var add = function sum(x, y) {
//   // var logic= x*y;
//   return x * y; // return logic:
// };

// console.log(" multiplication of  8 * 9 :" + add(8, 9));
// // By  function  we can reuse the  logic... it reduce the code lines of code

// console.log(" .......... Types of Fucntions...............");
// console.log(
//   " 1. Named function, 2. Anonymo's function ,  3.immediately invoked function expression IIFE , 4. Arrow function  "
// );

// console.log("------ 1.Named function is normal function-------- ");
// console.log(" -----2. Anonymo's function is function expression");
// //   syntax : var anyName = function defination
// var add = function (num1, num2) {
//   result = num1 + num2;
//   return result;
// };

// console.log("addition of 5 and 5 is : " + add(5, 5));

// console.log("--------3.Immediately invoked function expression---------");

// // syntax :     var anyName=   ( function defination)( values );
// var add = (function fname(x, y) {
//   result = x / y;
//   return result;
// })(10, 5);

// console.log(add);

// console.log(" --------Arrow function----------");
// // syntax : var anyName=   ( parameters... ) =>
// //    {
// //    code  to be executed
// //      return value;
// //  }

// var product = (x, y) => {
//   return x * y;
// };

// console.log(product(19, 19));

// //  if there is only one statement then we use shortcut method  by  following points
// //1. we can  execute  with or without   block{}  // we should use block{}  when there are more than one statement
// //2. we can use  return or without return
// // syntax : var anyName= ( num1, num2)=> num1*num2 or ( num1,num2) => { return num1*num2}

// var short = (num1, num2) => num1 - num2;
// //  => { return num1- num2} we can  also use return or without return  both gives same results } // for single statement only
// console.log(short(9, 5));

// // if there is only one parameter then we use shortcut method shown as below
// // syntax: var anyName = cube => num*cube*cube

// var parameter1 = (para) => para * para + para - para;
// //  => { return num1- num2} we can  also use return or without return  both gives same results

// console.log(parameter1(5));

// // empty function
// // syntax : var anyName = ()=> console.log( " this is empty function")
// // syntax : var anyName = _=> console.log( " this is empty function")

// var empty = () => document.write("This is empty function");

// // CALL BACK FUNCTION

// function callback(a, b) {}

// function generator(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// }
// generator(50);

console.log("FUNCTIONS");

// debugger;
// var a = 10;
// function hello() {
//   return;
// }

// hello();

// debugger;
function hello() {
  var a;

  var a = 10;

  // console.log(a);

  return a;
}

hello();
// console.log(hello());

// var b;

// b = 20;
// console.log(b);

// debugger;
// console.log(c);

// var c = 100;

// Printing n numbers using functions

function EvenNumbers(e) {
  for (i = 1; i <= e; i++) {
    console.log(i);
  }
}

EvenNumbers(10);
