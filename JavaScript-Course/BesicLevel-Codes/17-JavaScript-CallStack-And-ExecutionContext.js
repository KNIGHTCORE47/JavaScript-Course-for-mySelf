/* JavaScript Execution Context - it means the way how JavaScript execute our codes/files. JavaScript Execution Context has two types called - 1.'Global Execution Context' and 2.'Function/Functional Execution Context' */

//NOTE - there is a another Execution Context found in case of Mongoose called 'Eval Execution Context'.


//Global Execution Context (GEC) - Every time we give code to JavaScript GEC creates and refered with 'this' keyword.

/* NOTE - code environment similar to node, deno, bun has there own global execution context, like in node environment the value of 'this' return a empty object {}, whereas in browser the value of 'this' is "Window Object" */


//JavaScript is single threaded in nature

// JavaScript Execution Context run in two phases - 1.Memory Creation Phase/Creation Phase and 2.Execution Phase.

//Memory Creation Phase - In MCP js just allocate the memory for variables and whatever is declared in the code.


/* let valNum1 = 5;
let valNum2 = 7;
function One(num1, num2) {
let total = num1 + num2
return total
}

let resultOne = One(valNum1, valNum2);
let resultTwo = One(25, 98);
*/


//The Ways of JavaScript Execution Context execute in previously written code are shown here step by step -

//step01 - Global Execution/Global Environment --> 'this'


//step02 - Memory Phase ⤵️

//valNum1 --> undefined
//valNum2 --> undefined
//One --> defination //defination of that function
//resultOne --> undefined
//resultTwo --> undefined


//step03 - Execution Phase ⤵️

//valNum1 <-- 5
//valNum2 <-- 7
//One --> there is nothing to be executed

//in line no. 25 js has to go in 'resultOne' but it has a func in it called 'One', for that func 'One' will create another Execution Context like - [New Variable Environment + Execution Thread]

//One --> [New Variable Environment + Execution Thread] //after execution this Execution Context will delete automatically.

//due to the creation of another Execution Context for function 'One' the Memory Phase and Execution Phase will also open again for this function 'One'. Global Execution will takes place for a single time but for every created func another Execution Context will form.

////step02A - Memory Phase ⤵️

//valNum1 --> undefined
//valNum2 --> undefined
//total --> undefined


////step02B - Execution Phase ⤵️

//num1 --> 5
//num2 --> 7
//total --> 12 // return to the Global Execution Context


//resultOne --> 12

//in line no. 26 js has to go in 'resultTwo' but it has a func in it called 'One', for that 'One' will create another Execution Context like - [New Variable Environment + Execution Thread]

//One --> [New Variable Environment + Execution Thread] //after execution this Execution Context will delete automatically.

//due to the creation of another Execution Context for function 'One' the Memory Phase and Execution Phase will also open again for this function 'One'. Global Execution will takes place for a single time but for every created func another Execution Context will form.

////step02A - Memory Phase ⤵️

//valNum1 --> undefined
//valNum2 --> undefined
//total --> undefined


////step02B - Execution Phase ⤵️

//num1 --> 25
//num2 --> 98
//total --> 123 // return to the Global Execution Context

//resultwo --> 123

/***************************** Call Stack (CS) *****************************/

// Call Stack - it is a type of sandbox created during the run of JavaScript code where every EC of a func after the Global Execution Context is created and load inside of Call Stack load inside of it. Function like here has another funtion's call/methode in it, for that there is a rule aaplied in CS that is "LEFO" explained as - LAST-IN FIRST-OUT rule.

/* function One() {
console.log("From One);
Two();
}

function Two() {
console.log("From Two);
Three();
}

function Three() {
console.log("From Three);
}

One(); */
