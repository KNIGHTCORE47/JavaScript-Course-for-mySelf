//************  .call() ********************//

// NOTE - In JS every function has its own memory stack and call stack, if a function is called within another function then after loading the global execution context, for parental function JS will initialize the memory stack and load the function into the call stack and the code will be executed line by line. Whenever JS detect the call part of the children function within it, immediately stop the code execution for the parental function and initialize the memory stack for the children function and load the function into the call stack, begin the code execution.

// NOTE - In that case for parental function, JS can access this keyword for that function's current context but for the children function this keyword refers what.? Means if the code executed for the children function it's this keyword will refer the global execution context because the outer most layer the function is the parental function itself, that is why here the children function's current context denotes with this keyword will be an empty object in the node environment and for browser environment window object.





//***************CODE*************//

// function userName(username) {
//     //SOME DB CALLS (complex calculation)

//     this.username = username
//     // console.log(this);
// }

// function createUser(username, email, password) {

//     userName(username)      //here the function userName() does not called yet. We just have given the function's reference only though have given the parenthesis ().

//     this.email = email
//     this.password = password
// }

// const userOne = new createUser("Munna", "munnabole@gilaim.com", "ddff345");

// console.log(userOne);       // it will return  { email: 'munnabole@gilaim.com', password: 'ddff345' }






//************DEBUGGED CODE**********************//

// function userName(username) {
//     //SOME DB CALLS (complex calculation)

//     this.username = username
//     console.log("called");
// }

// function createUser(username, email, password) {

//     userName(username)      // to call the function we have to explicitly add call() method.

//     this.email = email
//     this.password = password
// }

// const userOne = new createUser("Munna", "munnabole@gilaim.com", "ddff345");

// console.log(userOne);       // it will return  { email: 'munnabole@gilaim.com', password: 'ddff345' }






//************FURTHER DEBUGGED CODE**********************//

// function userName(username) {
//     //SOME DB CALLS (complex calculation)

//     this.username = username
//     // console.log("called");
// }

// function createUser(username, email, password) {

//     userName.call(username)      // now the function userName() is called, .call() method not only call the function but also hold the reference of that functio, but still there is a problem that is after the completion of calling the userName() function the JS just move that function remove the associate call stack and memory stack.

//     this.email = email
//     this.password = password
// }

// const userOne = new createUser("Munna", "munnabole@gilaim.com", "ddff345");

// console.log(userOne);       // it will return  { email: 'munnabole@gilaim.com', password: 'ddff345' }






//************FINAL DEBUGGED CODE**********************//

function userName(username) {
    //SOME DB CALLS (complex calculation)

    this.username = username
    // console.log("called");
}

function createUser(username, email, password) {

    userName.call(this, username)      // to avoid the deletion of the current context of the function userName() we have to provide another this keyword as the first parameter in the .call() method.

    this.email = email
    this.password = password
}

const userOne = new createUser("Munna", "munnabole@gilaim.com", "ddff345");

console.log(userOne);       // it will return  { email: 'munnabole@gilaim.com', password: 'ddff345' }