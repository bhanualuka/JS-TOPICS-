console.log(`Jai sai master `);
console.log(` Jai Bapuji maharaj`);

// String Methods()
/* 
1. length
2.charAt()
3.charCodeAt()
4. at()
5.slice()
6.subString()
7.subStr()
8.split()
9.toLowerCase()
10.toUpperCase()
11.padStart()
12.padEnd()
13.   
      






// TASKS
// String Methods

// print all capital letters in a string
// debugger;

/*let aa = "";
function cptlLtrs(a) {
  for (i = 0; i < a.length; i++) {
    let value = a.charCodeAt(i);
    if (value >= 65 && value <= 90) {
      console.log(a[i]);
      aa += a[i];
    }
  }
}
cptlLtrs("AchBcD");
console.log(aa); */
//-----------------------------------------------------------------------------------------------

// Take a string which conatins spaces then print that  string with no spaces and count characters with spaces and without spaces
/*let nStr = "";
let noSpaceChar = 0;
let spaceChar = 0;
function noSpc(a) {
  for (i = 0; i < a.length; i++) {
    if (a[i] !== " ") {
      // console.log(a[i]);
      nStr += a[i];
      noSpaceChar++;
    } else {
      // console.log(a[i]);
      spaceChar++;
    }
  }
}
noSpc("  hello guys  ");
console.log(nStr);
console.log(` Length of the new string is = ${nStr.length}`);
console.log(`With space characters are ${spaceChar}`);
console.log(` No space characters are  ${noSpaceChar}`); */
//------------------------------------------------------------------------------------------------------------------------

// Revrsing a Sting

/*let rvrsStr = "";

function revsStr(Str) {
  for (i = 4; i >= 0; i--) {
    console.log(Str[i]);
    rvrsStr += Str[i];
  }
}
revsStr("BHANU");
console.log(rvrsStr); */
//-----------------------------------------------------------------------------------------------------------------------

// Given string a=Cha_iTa_nY_a  reomve all the underscores and  concat them to new string

/*let Nstr = "";
function conCat(chay) {
  for (i = 0; i < chay.length; i++) {
    if (chay[i] !== "_") {
      console.log(chay[i]);
      Nstr += chay[i];
    }
  }
}

conCat("Cha_iTa_nY_a");
console.log(Nstr); */
//------------------------------------------------------------------------------------------------------------------------

/*let a = "AbcDrT";

// value = "";
conCat = "";
for (i = 0; i < a.length; i++) {
  let value = a.charCodeAt(i);
  if (value >= 65 && value <= 90) {
    console.log(a[i]);
    conCat += a[i];
  }
}
console.log(conCat.toLowerCase()); */
//-----------------------------------------------------------------------------------------------------------------------
