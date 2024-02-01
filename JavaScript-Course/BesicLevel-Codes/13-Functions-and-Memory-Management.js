//functions

//if we need to put these type code simultaneously in different portion of any code we use function

// console.log("a");
// console.log("b");
// console.log("c");
// console.log("d");

function name() {
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
}

name     //this is the reference of that function and the function is not executed yet
// name();


function numPlus(num01, num02) {    // here num01, num02 are called parameters
    console.log(num01 + num02);
}

numPlus(3,4)    //here num01, num02 are called arguments


function numMinus(num01, num02) {
    let subVal = num01 - num02;
    return subVal
}

let subVal = numMinus(158, 65);
console.log(subVal);


function numMultiply(num01, num02) {
    return num01 * num02;
    
}

console.log(numMultiply(15, 65));


function LoggedIn(userID = "Nulla") {     //we can also set a default value in any parameter which will be re-write upon providing arguments
    if (!userID) {      //here not operator ! is used as like => if (userID === undefined)
        return console.log("Please enter a name");
    }
    return (`Welcome ${userID}!`)
}

LoggedIn("Bulla")   // here we have passed the agrument to the parameter and return it but we have not wrap it in a code like console.log() thats why it will not print the return value

console.log(LoggedIn("Bulla"));
console.log(LoggedIn());    //Primarily it will give undefined value though here we did not put any value, but set a default param in the function as Nulla
console.log(LoggedIn("Gulla"));  



// Business logics using function
// Shoping cart Example

// function AddCartPrice(cart) {
//     return cart
// }

// console.log(AddCartPrice(200, 1000, 375, 11999, 5999));  // it will only give one value that is the first one - 200

// using rest operator.

function AddCartPrice(...cart) {
    return cart
}

console.log(AddCartPrice(200, 1000, 375, 11999, 5999));     // it will return an array

//pass object in function

const user = {
    userName: "abc",
    passWord: 123
}

function userLogIn(anyObj) {
    console.log(`hay ${anyObj.userName}! your password is ${anyObj.passWord}`);
}

userLogIn(user)

const user02 = {
    userName: "abc",
    passWords: 123
}

function userLogIn02(anyObj) {
    console.log(`hay ${anyObj.userName}! your password is ${anyObj.passWord}`);
}

// userLogIn02(user02)     //here the slight change in password to passwords will give undefined value
userLogIn02({
    userName: "def",
    passWord: 456
})

//use arrays in function

const myArray007 = [200,300,440,500,600]

function arrayCheck(getArray) {
    return getArray[3]
}

console.log(arrayCheck(myArray007));