// Global scope

const a = 100;
let b = 200;
var c = 300     //var has the problem that we can change its value anywhere in the javaScript though declared in any local scope

if (true) {

// Here the local scope is denoted with curly braces like - {}, every local scope is distant from each other like different entities. 

    const a = 900;  //unaccessible from the global scope
    let b = 500;    ////unaccessible from the global scope
    var c = "3000 Paisa"    ////accessible from the global scope and that is the problem

    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);



// Node environment and browser v8 engine environ ment is not exactly the same, there are some differences present there, like the Global scope is different in both of this environment  



// Sope level and mini hoisting


//Nested Scope
function nested() {
    const userName = "Knight";

    function nestedOne() {
        const userPassword = "Knight#40Pass";
        console.log(userName);
    }
    // console.log(userPassword);
    nestedOne()
}
nested()


//Closures

function one() {
    const winScoreBy = "1";
    function two() {
        const wonTeam = "Brazil";

        console.log(`${wonTeam} has secured the win with ${winScoreBy} goal`);
    }

    two();
}

one();

//it is an example clouser that is the func two() {} which is the child nested inside of func one() {} parent can use it's variables inside of it.

// it also can create with if else condition

if (true) {
    const oldLoginPass = "16#02#1998theBirth";
    if (!oldLoginPass) {
        const newLoginPass = "16#02#1998theBirt";
        console.log(`Sorry your oldLoginPass - ${oldLoginPass} and newLoginPass - ${newLoginPass} can not be the same `);
    }else{
        console.log("Access Denied!");
        // console.log(`Sorry your oldLoginPass - ${oldLoginPass} and newLoginPass - ${newLoginPass} can not be the same `);

    }
}



//concept of Hoisting

calculateNum(5, 8);

function calculateNum (num1, num2) {
    return console.log(num1 + num2);
}


// calculateNum02(14, -16);

const calculateNum02 = function (num1, num2) {  //it is called a function expression cause the actual function is hold inside of a constant, it is why there is no chance of getting hoisting here means expression of the function is declired before that actual function even initialized causing errors.
    return console.log(num1 + num2);
}

calculateNum02(14, -16);