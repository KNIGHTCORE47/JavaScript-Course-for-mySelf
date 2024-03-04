/* 'this' keyword -
this keyword refers the current context  */

const websiteAccess = {
    userName: "Knight",
    password: "Knight#445",
    payment: 499,
    welcomeMessage: function () {
        console.log(`${this.userName} welcome to the site`);
        
        console.log(this); 
    }
}

websiteAccess.welcomeMessage();
websiteAccess.userName = "KnightCore";
websiteAccess.welcomeMessage();

// here the current context of that 'this' keyword is inside of that const websiteAccess = {} curly braces.

console.log(this);  // here in the node environment it will give a empty parenthesis/object whereas browser v8 engine has global object called "WINDOW OBJECT" which will reflected there if we consol.log(this) in browser

function testThis() {
    const variable01 = "nulla";
    console.log(this);
    console.log(this.variable01);   //here we can not use this cause this can not use function execution context, it will give undefined
}
testThis()


//++++++++++++++++++++++++++++++++++++++++++++++++++


//Arrow Functions

const arrowOne = () => {
    const variable01 = "nulla";
    console.log(this.variable01);   //here we can not use this cause this can not use function execution context, it will give undefined

}
arrowOne();

//Arrow function with implicite return

const objFunc = () => console.log({userName: "knight"});

objFunc();

const sumVal01 = (val1, val2) => console.log(val1 + val2);

sumVal01(454, 0);


const sumVal02 = (val1, val2) => (
    console.log(val1 + val2),
    console.log(val1 - val2)
)

sumVal02(454, 4);

// const objFunc02 = () => {userName: "knight"};
const objFunc02 = () => ({userName: "knight"});


console.log(objFunc02());   // it will give undefined cause it is not the way to return an object, we have not wraped the object in paranthesis yet.

const theArray = ["inr", "usd", "dnr", "yen"]

theArray.forEach((items, index) => (console.log(items, index)));


//Arrow function with explicite return

const sumVal03 = (val1, val2) => {
    return (
        console.log(val1 * val2),
        console.log(val1 / val2)
    )
}

sumVal03(454, 4);

//Arrow function with implicite return