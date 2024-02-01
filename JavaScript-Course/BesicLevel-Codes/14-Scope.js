// Global scope

const a = 100;
let b = 200;
var c = 300     //var has the problem that we can change its value anywhere in the javaScript though declared in any local scope

if (true) {

// Local scope defined with - {}

    const a = 900;  //unaccessible from the global scope
    let b = 500;    ////unaccessible from the global scope
    var c = "3000 Paisa"    ////accessible from the global scope and that is the problem

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);