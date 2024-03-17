// console.log("Jai Sai Master");

// // javascript is Run time compailer (interpretar) ( it checks and execute each line by line  )
// // where as other languages are executes by compile time
// // ctrl+k+c shortcut for comments or  (ctrl+/)
// // ctrl+alt+n To run

// /*document.write(
//   "<h1> Iam Bhanu prakash </h1> <hr> <b> <ul> *I have  completed my gradutaion in 2023 in  the stream of ECE </ul>  Reading Mythology books and play outdoor games is my hobbies </b>   "
// );*/

// //alert(" Welcome");

// //confirm(" Enter ok");
// //console.log(confirm(" Enter ok "));
// //prompt("  Do you want to continue..?");

// /* primitive datatypes -  1.string(""),
//  2.boolean(true or false),
//  3.bigint( it provides larger than  253-1 int values)
// 4. undefiend ( )
// 5.null()
// 6.number( it takes onlu numbers  )
// 7.small()

//    */
// /* let UserNAme // declared
//   let UserName="  " // intialized
//    1. Here let is a key word which is used to declare Variavle
//   2.  UserName is variable
//   3. = is used to assign the value */

// /*let UserName = "hello"; // declared and intialized
// console.log(typeof UserName);

// var FirstName = true;
// console.log(typeof FirstName);

// let lastName;
// console.log(typeof lastname);

// let CompanyName = null;
// console.log(typeof CompanyName);

// let age = 29;
// console.log( typeof age); */

// //  Type conversions
// // var firstName = 123;
// // console.log( "value :"   + (firstName)  + ",type :" + typeof firstName  );
// // console.log("value :" +Number (firstName) + ",type :" + Number (typeof firstName));

// // a = 10;
// // console.log(a); //interpreted language ( checking the code line by line)

// // a = 188; //here "Run time assginments" takes place due to interpretd language
// // console.log(a);

// // a = "string"; // last in first out(Call stack) because of interpreted language

// // console.log(a); // a will be string

// // let i = 0;
// // let count = 0;
// // while (i <= 20) {
// //   i++;
// //   console.log(i);
// //   count++;
// // }
// // console.log(count);

// // debugger;

// // var a = 8;

// // console.log(a);

// // var a = 5555555555555555555555;

// // console.log(a);

// // var a = "string324653546";
// // console.log(a);

// // var a = 10;
// // console.log(a++);

// // console.log(a);

// // var c = "string";
// // var d = "string";

// // console.log(c === d);

// // TERNARY OPERATOR
// console.log("---TERNARY OPERATOR---");
// // var a = 18;
// var a = 12;
// b = 18;

// c = b == 19 ? 26 : 22;
// console.log(c);

// // // debugger;

// // for (var i = 3; i > 0; i--) {
// //   console.log(i);
// // }
// // console.log(i);

// // console.log("printing 1 to 5 numbers by debugging");
// // Task    20/12/2023

// // debugger;
// for (var i = 1; i < 4; i++) {
//   console.log(i);
// }

// console.log(i);
// i++;

// // debugger;
// // console.log("printing 11 to 20 numbers by debugging");
// // for (var a = 11; a <= 20; a++) {
// //   console.log(a);
// // }

// // debugger;
// // console.log("bha=bhanuprakash");
// // let bha = "bhanuprakash";

// // for (y = 0; y < 12; y++) {
// //   console.log(bha[y]);
// // }

// //  var a=chai tan ya

// var a = [1, 2, 3, 4, 5];

// a[6] = 6;
// a[7];

// console.log(a[1]); // 2
// console.log(a[7]); // undefined

// // console.log(b[0]); // not defined

// var c = ["hello", "hell", "emi"];

// console.log([c[1][0]]); // in array[with in bracket] form getting each letter  // o/p is [h]
// console.log(c[1][0]); //    getting each letter in string form  out of brackets  // o/p is h

// // Accessing the array with index and accesing the string inside the array

// // index   -   0       1      2
// var arry = ["bhanu", "Ramu", 8579]; // lenght  of the array is "3"

// // Accessing the elements in the array with index
// console.log(arry[0]); // o/p is bhanu

// // Accessing the each letter of the element in the array wiht index
// console.log(arry[0][0]); // o/p is b

// // printing each letter of element in array with index

// var a = ["bhanu", "Ramu", 123456];

// for (i = 0; i < a.length; i++) {
//   for (j = 0; j <= a[i].length; j++) {
//     console.log(a[i][j]);
//   }
// }

// var b = [12345];
// console.log(b[0][2]); // It gives undefined because  the whole number is one digit

// // debugger;
// var givenStr = "chai_tan_ya";
// var newStr = "";

// for (var i = 0; i < givenStr.length; i++) {
//   if (givenStr[i] == "_") {
//     newStr = newStr + givenStr[i + 1].toUpperCase();
//     i++;
//   } else {
//     newStr = newStr + givenStr[i];
//     console.log(newStr);
//   }
// }
// console.log(newStr);
// console.log(i);
// // console.log(s);

// // debugger;
// i = 0;
// for (; i < 4; ) {
//   i++;
//   console.log(i);
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);

// var a = 2;
// console.log(a);

// var a = 3 * "3";

// console.log(a);
// console.log(typeof a);

// var a = +prompt("enter a");

// a != String ? console.log("a is number") : console.log("a is string");

// Alert Numbers 1-10 using for loop:

// alert("welcome");

// for (i = 0; i <= 15; i += 3) {
//   alert(i);
//   console.log(i);
// }

// Tasks:1- Alret Numbers 1-10 using for loop

// Task2- Find multiple of 3 without using if condition

// Task3-  Print last index character of a string

// Task4-  Print range of numbers between 5-8 using && operator and use ternary operator

//Task5-  Print reverse of Numbers and strings

//  Task6-  Find length of input without using predefined method (Length)
//     And all above tasks should be done using all three loops
//--------------------------------------------------------------------------------------------------------------------------
// Task:1- Alret Numbers 1-10 using loops(do,while,for)

// for (var i = 0; i < 10; i++) {
//   alert(i);
//   console.log(i);
// }

// var i = 0;
// while (i <= 10) {
//   alert(i);
//   console.log(i);
//   i++;
// }

// var i = 0;
// do {
//  // var i=0;
//   alert(i);
//   console.log(i);
//   i++;
// } while (i <= 10);

//-------------------------------------------------------------------------------------------------------------------------
// Task2- Find multiple of 3 without using if condition
// WITH USING "IF CONDITION"

// for (i = 0; i <30; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// WITH OUT USING IF CONDITION

// for (i = 0; i < 30; i++) {
//   i % 3 === 0 ? console.log(i) : ""; // By using Ternary operator
// }

// var i = 3;

// while (i <= 30) {
//   i % 3 === 0 ? console.log(i) : "";
//   i++;
// }

// var i = 3;

// do {
//   i % 3 === 0 ? console.log(i) : "";
//   i++
// } while (i <= 30);

// Using Functions

// debugger;
// function multipleb3(n) {
//   for (i = 0; i < n; i++) {
//     a = i % 3 === 0 ? i : "not-multiple";
//     console.log(a);
//   }
// }

// multipleb3(100);
// ----------------------------------------------------------------------------------------------------------------------
// Task3-  Print last index character of a string

// var str = "Jai Sai Master";

// // console.log(str.length);

// console.log("last index character of str:" + str(13));

// Task4-  Print range of numbers between 5-8 using && operator and use ternary operator

// for (i = 5; i < 9; i++) {
//   1 && i == i ? console.log(i) : ""; // ternary operator and logical and operator
//   //   console.log(a);
// }

//USING DO WHILE LOOP
// var i = 5;
// do {
//   console.log(i);
//   i += 1;
// } while (i < 9);

// console.log(1 && i == i);
// ----------------------------------------------------------------------------------------------------------------------

//Task5-  Print reverse of Numbers and strings

// debugger;
// i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }
// console.log(i);

// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i > 0);

// PRINTING REVERSE OF A STRING

// console.log(str.length);

// debugger;
// var str = "bhanu";
// for (i = 11; i >= 0; i--) {
//   console.log(str[i]);
// }
// for (i = str.length-1; i >= 0; i--) {
//   console.log(str[i]);
// }
// --------------------------------------------------------------------------------------------------------------------------

// var str = "bhanu";
// var count = 0;
// for (i = 0; i <= 4; i++) {
//   console.log(str[i]);
//   count++;
// }
// console.log("The length of the (Bhanu) is =" + count);
// -----------------------------------------------------------------------------------------------------------------------------

// FACTORIAL OF A NUMBER 5 USING LOOP
// debugger;
// var factorial = 1;
// for (i = 5; i > 0; i--) {
//   factorial *= i;
// }
// console.log(factorial);
// ----------------------------------------------------------------------------------------------------------------------------

// CREATING MULTIPLICATION TABLE OF 5 USING LOOPS(NESTED)

// var fiveT;
// for (i = 0; i <= 10; i++) {
//   var value = 5 * i;
//   console.log(`5* ${i}= ${value}`);
// }

// for (i = 0; i <= 10; i++) {}

// debugger;
let a = "hello";
let conCat = "";
for (i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    console.log(a[i]);
    conCat = conCat + a[i];
  }
}

console.log(conCat);



