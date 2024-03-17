console.log("Jai Sai master");
console.log("Jai Bapuji maharaj");

// debugger;
/*let a = "Bhanu";
let conCat = "";
for (i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    console.log(a[i]);
    conCat = conCat + a[i];
  }
} 

console.log(conCat); */

// Task              2/01/24

// Using function find the length of the string
// Using function print the all the chracters in the string
// Using function print the Evnen index values (characters) of the string
// Using function print the Even index values(characters ) as a new string(concating)

// debugger;
/*let ln = 0;
let fconCat = "";
function strManipulate(b) {
  for (i = 0; b[i] !== undefined; i++) {
    if (i % 2 == 0) {
      console.log(b[i]);
      ln++;
      fconCat += b[i];
    }
  }
}

strManipulate("Jai Bapuji maharaj");
console.log(`Length of the given string in even indexes is = ${ln}`);
console.log(
  `Even index characters Concatination of given string is = ${fconCat}`
); */

// Counting the vowels and Consonants of given string

let v = "Bhanu";
vowels = "aeiouAEIOU";
let count = 0;
for (i = 0; i < v.length; i++) {
  if (v[i] == vowels[i]) {
    console.log(v[i]);
    count++;
  }
}
console.log(count);
