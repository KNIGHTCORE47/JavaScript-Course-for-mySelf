// Dates

let theDate = new Date();

console.log(theDate);

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

let anotherMyDate = new Date("01-17-2024")      //MM-DD-YY
console.log(anotherMyDate.toLocaleString()); 

let myTimeStamp = Date.now();       //return date in milisecond from 1st jan 1970

console.log(myTimeStamp);
console.log(anotherMyDate.getTime());

console.log(Math.floor(Date.now()*1000));      //return date in seconds from 1st jan 1970, here Math.floor() used to round off the decimal value

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

/* 
.toLocaleDateString() it is very unique Converts a date to a string by using the current or specified locale.

@param locales — A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.

@param options — An object that contains one or more properties that specify comparison options.
*/

let changeDate = newDate.toLocaleDateString("default", {
    month: "long",
    hour: "numeric",
})

console.log(changeDate);