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
