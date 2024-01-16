// Dates

let theDate = new Date();

console.log("toDateString()");
console.log(theDate.toDateString());

console.log("toLocaleString()");
console.log(theDate.toLocaleString());

console.log("toISOString()");
console.log(theDate.toISOString());

console.log("toJSON()");
console.log(theDate.toJSON());

console.log("toLocaleString()");
console.log(theDate.toLocaleString());

console.log(typeof theDate);    //date object

let myDeclaredDate = new Date(2024, 0, 16);

console.log(myDeclaredDate.toDateString());

let myDeclaredDateAndTime = new Date(2024, 0, 16, 10, 32);

console.log(myDeclaredDateAndTime.toLocaleString());