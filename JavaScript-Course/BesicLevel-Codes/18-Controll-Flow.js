//Controll Flow - is the defined way to write JS cause JS run line by line, but in development we need more controll over the code's execution, we don't want to run the code all the time - like if any code fetch data from a server and there is a delay or we does not get any response we want to hold that JS code to be executed, for that we use Controll Flow of JavaScript which help to run the code on a conditional basis.

//if statement

const isUserLoggedIn = true;

// if (isUserLoggedIn === true) {
//     console.log("Show Log Out BTN");
// }

if (isUserLoggedIn) {
    console.log("Show Log Out BTN");
}

let temperatureEnvironment = 45;
if(temperatureEnvironment === 45) {
    console.log("hai Garmi");
}

//2<3, 4>3, 2>=2, 5>=4, 2<=2, 2<=8, let a=2, a==2, a!=69, 94==="94"

/*
< - less than
> - greater than
>= - greater than equals to
<= - less than equals to
= - assignment operator
== - equals to
!= - not equals to
=== - equals to(check data-type also)
|| - or operator
&& - and operator
*/

let score = 64;
if (score!=64) {
    console.log("let's see");
};

//if else statement

if (12 === "12") {
    console.log("data-type matched");
}else {
    console.log("data-type does not matched");
}


let gameSound = "redLight";

// if (gameSound = "greenLight") {
//     console.log("Bhago Bancho");
// }else{
//     console.log("Ruko Bancho");
// }    //Here it will give console.log("Bhago Bancho") cause here the asignment operator (=) will check that if gameSound has a string in it or not, and on the basis of that give result

if (gameSound == "greenLight") {
    console.log("Bhago Bancho");
}else{
    console.log("Ruko Bancho");
};

let userLevel = 200;

if (userLevel > 180) {
    let gameAbility = "+50 HP boost";
    // var gameAbility = "+50 HP boost";    //var has global scope that's why it is better to use let or const  
    console.log(`Health Potion Obtained!!! User Gets ${gameAbility}`);
}
// console.log(`Health Potion Obtained!!! User Gets ${gameAbility}`);      //give error - ReferenceError: gameAbility is not defined



//Short Hand Notation 
let userBalance = 5000;

if(userBalance<5500) console.log("Access Denied");  //In Short Hand Notation JS use implicit scope and we have to denote semicolon ";" to terminate it's execution.

if(userBalance<5500) console.log("Access Denied"),
console.log("Insufficient Balance");        //here we also can use multiple lines with help of "," but it is a bad practice. !!!NOT RECOMENDED!!!



//Nesting - if, else, else if

if (userBalance<3500) {
    console.log("Not True"); 
}else if (userBalance<4000) {
    console.log("Not True");
}else if (userBalance<4500) {
    console.log("Not True");
}else{
    console.log(`User has balance of ${userBalance}`);
};



//Check Multiple Condition

let userEmailID = true;
let userPhoneNo = true;
let userDebitCard = true

if (userEmailID || userPhoneNo) {
    console.log("Show Log In BTN");
};

if (userEmailID && userDebitCard) {
    console.log("Allow to Buy");
};




//********************* Switch Case *****************//

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const monthValue = 3;

switch (monthValue) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;
    case 5:
        console.log("may");
        break;
    
    default:
        console.log("No Month Found");
        break;
};

const monthValueinString = "feb";

switch (monthValueinString) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        // break;
    case "mar":
        console.log("mar");
        break;
    case "apr":
        console.log("apr");
        break;
    case "may":
        console.log("may");
        break;
    
    default:
        console.log("No Month Found");
        break;
};

//break is the keyword which helps to execute the switch case properly, if any code where break is comment-out or being deleted the whole values will be execute until found break and except default.



/************** Truthy values and Falsy values ***********************/

if ("false") {
    console.log("the code will run");
}else{
    console.log("the code will not run");

}

if ("") {
    console.log("the code will run");
}else{
    console.log("the code will not run");

}

//Falsy values denoted with - 
/*
false
"" - empty string
null - null value
undefined
0
-0
NaN - not a number
BigInt 0n
*/


//Truthy values denoted with - 
/* 
"0" - string zero
"false" - string false
" " - string space
[] - empty array
{} - empty object
function(){} - empty function
*/

/* 
false == 0 gives true
false == "" gives true
"" == 0 gives true
*/


//to check an array - 
let userEmailID02 = [];
if (userEmailID02.length === 0) {
    console.log("user does not have a second email");
}

//to check an object - 
let userEmailID03 = {};
if (Object.keys(userEmailID03).length === 0) {
    console.log("user does not have a third email");
}