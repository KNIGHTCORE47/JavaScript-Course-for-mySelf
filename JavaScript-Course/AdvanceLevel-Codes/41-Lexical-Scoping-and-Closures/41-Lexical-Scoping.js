//******************Lexical scoping*********************//

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


/* NOTE - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.*/


function init() {
    let name = "Mozilla"; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


/* NOTE - init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init(). */



function outerFunc(params) {
    let anyVar = "bulla"
    function innerFunc01() {
        let anyVar02 = "nalla";
        console.log(`From inner: ${anyVar}`);
    }

    function innerFunc02() {
        console.log(`From inner child 02: ${anyVar}`);
        // console.log(`From inner child 01: ${anyVar02}`);       // not accessable
    }
    innerFunc01()
    innerFunc02()

    // console.log(`From inner 1st Child: ${anyVar02}`);       // not accessable
}

outerFunc()

// console.log(`From TOO OUTER: ${anyVar}`);

