// String in old form
 const name = "ABC";
 const fileCount = 30
console.log(name + fileCount);

// String in NEW ES6 JavaScript
// we use template literals
const name1 = "ABCDE";
const fileCount2 = 7
console.log(`Hello bhai ${name1} tere pass ${fileCount2} file hain na...?`);        // it is called string interpolation

//Another way to declare string

const discordName = new String("babaBui007");
console.log(discordName);
console.log(discordName[5]);
console.log(discordName.__proto__);
console.log(discordName.length);
console.log(discordName.toLocaleUpperCase());
console.log(discordName.charAt(3));
console.log(discordName.lastIndexOf("b"));

const newString = discordName.substring(0, 6);

const newStringSlice = discordName.slice(0, -3);

console.log(newString);
console.log(newStringSlice);

const anotherString = "       a-batra5483@gmail.com     ";

const anotherStringActual = anotherString.trim();

console.log(anotherString);
console.log(anotherStringActual);


const url = "http://google.com/Images+mia-goth-hot-horror/"

console.log(url.replace("-", "+"));

console.log(url.includes("mia"));
console.log(url.includes("miaa"));