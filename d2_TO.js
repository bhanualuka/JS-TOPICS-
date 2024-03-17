console.log("Jai sai master ");
console.log("Jai Bapuji maharaj ki jai");

//copying a variabale
// call by value
// var firstName = "hello";

// var userName = firstName;
// console.log("value:" + firstName+ ",type:" + typeof firstName);
// console.log("value:" + userName + ",type:" + typeof userName);

// Type conversions ( converting data of one data type to another data type)

// Conversion of string to number
console.log("_______ STRING TO NUMBER________");
let firstName = "50";
console.log("value:" + firstName + ",type:" + typeof firstName);
console.log("value:" + Number(firstName) + ",type:" + typeof Number(firstName));

let lastName = "hello123";
console.log("value:" + lastName + ",type:" + typeof lastName);
console.log("value:" + Number(lastName) + ",type:" + typeof Number(lastName));

//  parseInt and parseFloat
let clearName = "11.238hiii";
console.log("value:" + clearName + ",type:" + typeof clearName);
console.log(
  "value:" + parseInt(clearName) + ",type:" + typeof parseInt(clearName)
);
console.log(
  "value:" + parseFloat(clearName) + ",type:" + typeof parseFloat(clearName)
);
// USING DIRECT DATA TYPE WITH VALUES IN IT..  INSTED OF VARIABLE NAMES
let hashName = Number("hello");
console.log("value:" + hashName + ",type:" + typeof hashName);
console.log("value:" + Number("hello") + ",type:" + typeof Number("hello"));

let cuteName = Boolean(0);
console.log("value:" + cuteName + ",type:" + typeof cuteName);
console.log("value:" + Boolean(0) + ",type" + typeof Boolean(0));

let endName = "undefiend";
console.log("value:" + endName + ",type:" + typeof endName);
console.log("value:" + Number(endName) + ",type:" + typeof Number(endName));

let inName = "Infinity";
console.log("value:" + inName + ",type:" + typeof inName);
console.log("value:" + Number(inName) + ",type:" + typeof Number(inName));

console.log("_______  .toString()  ________");

//  string- handle "undefined" and "null"
//  null and undefined.something()-always error
let hikeName = 123;
console.log("value:" + hikeName + ",type:" + typeof hikeName);

console.log(
  "value:" + hikeName.toString() + ",type:" + typeof hikeName.toString()
);

let likeName = null;

console.log("value:" + likeName + ",type:" + typeof likeName);
console.log(
  "value:" + likeName.toString() + ",type:" + typeof likeName.toString()
); // null and undefiend.someting()- always error

console.log(".....................................................");
console.log("_______ NUMBER TO STRING________");

let goodName = 45;
console.log("value:" + goodName + ",type:" + typeof goodName);
console.log("value:" + String(goodName) + ",type:" + typeof String(goodName));

let badName = 0;
console.log("value:" + badName + ",type:" + typeof badName);
console.log("value:" + String(badName) + ",type:" + typeof String(badName));

console.log(" __________STRING TO BOOLEAN______________ ");

var FirstName = "215";
console.log("value:" + FirstName + ",type:" + typeof FirstName);
console.log(
  "value:" + Boolean(FirstName) + ",type:" + typeof Boolean(FirstName)
);

var LastName = "null";
console.log("value:" + LastName + ",type:" + typeof LastName);
console.log("value:" + Boolean(LastName) + ",type:" + typeof Boolean(LastName));

var EndName = "undefiend";
console.log("value:" + EndName + ",type:" + typeof EndName);
console.log("value:" + Boolean(EndName) + ",type:" + typeof Boolean(EndName));

var middleName = " 121bhanu";
console.log("value:" + middleName + ",type:" + typeof middleName);
console.log(
  "value:" + Boolean(middleName) + ",type:" + typeof Boolean(middleName)
);

console.log(".....................................................");

console.log("_______ BOOLEAN TO STRING________");

let startName = true;
console.log("value:" + startName + ",type:" + typeof startName);
console.log("value:" + String(startName) + ",type:" + typeof String(startName));

let StartName = false;
console.log("value:" + StartName + ",type:" + typeof StartName);
console.log("value:" + String(StartName) + ",type:" + typeof String(StartName));

console.log(".....................................................");
console.log("_______ NUMBER TO BOOLEAN________");

let okName = 15;
console.log("value:" + okName + ",type:" + typeof okName);
console.log("value:" + Boolean(okName) + ",type:" + typeof Boolean(okName));

let surname = 0;
console.log("value:" + surname + ",type:" + typeof surname);
console.log("value:" + Boolean(surname) + ",type:" + typeof Boolean(surname));

console.log(".....................................................");
console.log("_______  BOOLEAN TO NUMBER ________");

let avgName = true;
console.log("value:" + avgName + ",type:" + typeof avgName);
console.log("value:" + Number(avgName) + ",type:" + typeof Number(avgName));

let tttName = false;
console.log("value:" + tttName + ",type:" + typeof tttName);
console.log("value:" + Number(tttName) + ",type:" + typeof Number(tttName));

// BODMAS
console.log(".....................................................");
console.log("<-------------------- OPERATORS----------------->");
console.log("_______  ADDITION ________");

var add1 = 55,
  add2 = 55;
console.log("55+55=" + (add1 + add2));

console.log("_______  SUBTRACTION________");
var sub1 = 55,
  sub2 = 55;
console.log("55-55=" + (sub1 - sub2));

console.log("_______  MULTIPLICATON________");
var mult1 = 9,
  mult2 = 2;
console.log("9*2=" + mult1 * mult2);

console.log("_______  DIVISION ________");

var div1 = 10,
  div2 = 2;
console.log("10/2=" + div1 / div2);

console.log("_______  MODOLUS ________");
var mod1 = 10,
  mod2 = 2;
console.log("10%2=" + (mod1 % mod2));

console.log("_______  EXPONENT ________");
var exp1 = 8469,
  exp2 = 6;
console.log("8469**6=" + exp1 ** exp2);



console.log(" Jai sai master ");
console.log(" Jai bapuji maharaj");

console.log(
  "Comparison Operators (>, < , ==, ===, >=, <=, !=, !== ,?:)  o/p= true or false >"
);
let num1 = 10,
  num2 = "2";
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2); // value
console.log(num1 === num2); // value  & type
console.log(num1 >= num2);
console.log(num1 <= num2); // num1<num2 , num1=num2
console.log(num1 != num2); // not equal to (!=) only value 
console.log(num1 !== num2); // value & type not equal to(!==)

// Ternary operator ?:
console.log(" __ Ternary operator ___");
let tp1 = 12,
  tp2 = 55;
let tp3 = tp1 < tp2 ? "hi" : "hello";
console.log(tp3);

let pt1 = 55,
  pt2 = 77;
let pt3 = pt1 > pt2 ? "your passed" : " your failed";
console.log(pt3);

console.log("pass marks: >=26");
console.log("fail marks:  <26 ");
console.log(" ------ Students final  result --------- ");
console.log("1.Student Name= Ramu ");
console.log("Marks obtained=98");
let std1 = 98,
  std2 = 23;
let std3 = std2 < std1 ? "pass" : "fail";
console.log("Grade: " + std3);

console.log("1.Student Name= Raavana ");
console.log("Marks obtained=11");
let std4 = 11,
  std5 = 12;
let std6 = std4 < std5; ? "fail" : " pass ";
console.log(" Grade:" +std6);

// Assignment operator =, +=, -=, *=, /=, %=, **=
console.log("----Assignment operator =, +=, -=, *=, /=, %=, **= ---- ");

let b = 5; // b==5
b += 3; // b=b+3: 5+3=8
b -= 3; // b=b-3: 8-3=2
b *= 3; // b=b*3: 2*3=15
b /= 3; // b=b/3: 15/3= 5
b %= 3; // b=b%3: 5%3=2
b **= 3; // b=b**3: 2**3=8
b = 9;
console.log(b);

// Binary digits
// 0000000000001001 16 bits
// 0000000000100100 b<<2 4+32=36
// 0000000000000010 b>>2 2
console.log("  shift operators ,>>,<<  >>= , <<=  ");
console.log(b << 2);
console.log(b >> 2);
console.log((b >>= 2)); //  Assiging the value '2' for 'b' by "="  (assignment operator)

console.log("------ nullish operator  ??:     -------  ");
var p = 5; //
var z = null; // if it is null it returns assigned value
console.log((p ??= 2));
console.log((z ??= 2));

// bitwise operators  " &", "|", "^"
console.log(" ----- bitwise operator & | ^  -----"); // remeber the binary bits
// and "&" operator
//0000000000000101  x=5
//0000000000000011  y=3
//0000000000000001  x&y=1
//  &= BOTH SHOULD BE TRUE , ANY ONE SHOULD NOT BE TRUE OR FALSE AND BOTH SHOULD NOT BE FALSE

let x = 5;
let y = 3;
console.log(x & y);
console.log((x &= y)); // bitwise and  assignment operator (&=)

// or "|" operator
//0000000000000101 r=5
//0000000000000011 s=3
//0000000000000111 r|s=7
// |= ANY ONE SHOULD BE TRUE AND BOTH SHOULD BE TRUE , BOTH SHOULD NOT BE TRUE
let r = 5;
let s = 3;
console.log(r | s);
console.log((r |= s)); // bitwise or assignment operator (|=)

// xor  "^" operator
//  ^= ANY ONE SHOULD BE TRUE , BOTH SHOULD NOT BE SAME
//0000000000000101 m=5
//0000000000000011 n=3
//0000000000000110 m^n=6
let m = 5,
  n = 3;
console.log(m ^ n);
console.log((m ^= n)); // bitwise xor assignment operator (^=)



