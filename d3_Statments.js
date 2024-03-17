console.log(" Jai sai master ");
console.log(" Jai bapuji maharaj");

// Conditional Statements if  else else if

let cond1 = "morning";

if (cond1 == " noon ") {
  document.write("True  Condition ");
} else if (cond1 == " night") {
  document.write("False Condition");
} else if (cond1 == "evng") {
  document.write(" Hello world...!!! ");
} else {
  document.write(" give correct conditon");
}

let num1 = 5;
let num2 = 3;
let operation = "addition";

switch (operation) {
  case "addition":
    document.write(" let  num1 = 5 , num2 =3 ");
    document.write(" <br> ");
    document.write(" <b> addition: </b>" + (num1 + num2));
    document.write(" <hr> ");

  // break;
  case " subtraction":
    document.write(" <br> ");

    document.write(" let  num1 = 5 , num2 =3 ");
    document.write(" <br>");
    document.write(" <b> Subtraction: </b> " + (num1 - num2));
    document.write(" <hr> ");

  // break;
  case " multipication":
    document.write(" <br>");
    document.write(" let  num1 = 5 , num2 =3 ");
    document.write(" <br>");

    document.write(" <b> Multiplication: </b> " + num1 * num2);
    document.write(" <hr> ");

  case "Division":
    document.write("<br> ");
    document.write(" let  num1 = 5 , num2 =3 ");
    document.write(" <br>");
    document.write(" <b> Divsion: </b> " + num1 / num2);
    document.write(" <hr> ");

  case " Modulus ":
    document.write("<br> ");
    document.write(" let  num1 = 5 , num2 =3 ");
    document.write(" <br>");
    document.write(" <b> Modulus : </b> " + (num1 % num2));
    document.write(" <hr> ");

  default:
    console.log(" not a valid operator ");
}
