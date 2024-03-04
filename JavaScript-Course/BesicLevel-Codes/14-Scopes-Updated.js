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
    console.log(userPassword);
    nestedOne()
}
nested()


//Closures