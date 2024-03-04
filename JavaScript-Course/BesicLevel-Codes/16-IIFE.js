// IIFE -  Immediately Invoked Function Expression.

//why to use - IIFE is used for a Immediate use of a Function like a database connection is fetch and use it in a function, for example whenever the application starts the database should connected to the application, for that we use IIFE, as well as some time we introduces some variables in a function situated in global scope, in some cases the function can be polluted by the global variable cause that function is accessing the global variables, to get rid of this problem we use IIFE

//how to use - just wrap the func in parenthesis () like ---

/*
(function OneFunc() {
    let a = 15
    console.log(a);
})()  //it will give an error cause though we initialize it but have not end it's execution context with semicolon ";" which we have provide explicitly

(() => {
    console.log("DB CONNECTED");
})()  // same here
*/

(function OneFunc() {
    let a = 15
    console.log(a);
})();

(() => {
    console.log("DB CONNECTED");
})();

((param) => {
    console.log(`hello ${param}`);
})("bulla");  //simply pass the arguments here 