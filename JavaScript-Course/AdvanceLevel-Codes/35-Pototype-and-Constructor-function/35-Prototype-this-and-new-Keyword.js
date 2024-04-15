//***************Prototype************//

// NOTE - The default behavior of JavaScript is Prototypal behavior, means if JS cant find any thing on the lower level then it will search that thing one layer upper like parents, grand parents, great great grand parents and so on until that thing resolves or get null value.

// Prototypal Inheritance - in JavaScript Prototypal Inheritance is the behavior that JS show to find a thing, if that is not available in the lower level, to access that JS search on upper levels as parent, grand parents etc until find that thing or get null value.


// let myArray = [1,2,3]       //open browser, copy the code and inspect 

// myArray


// NOTE - in JS every prototype of string, array, functions etc. are ultimately redirected towards an object and ultimately to null. That is why all the properties which are available for the objects are also avalable for the strings, arrays, functions etc.



// find the behavior of functions as objects in JS

function numMath(items) {
    return items * 5
}

numMath.power = 2

// console.log(numMath(5));

// console.log(numMath.power);      //it will give us value 2 because in JS everything defined here is under the hood is an object itseft and has syntactical sugar on it.

// console.log(numMath.prototype);     // it will return an empty braces {}. The prototype property not only give us some methods but also give use some internal properties too. Whenever we defined .prototype it set some contexts by default.



// Working method of new and this keyword in JS behind the scene.


function createUser(userName, scoerVal) {
    this.userName = userName        // this keyword is help to define the current context as well as create an empty object. As the prototype establised it give us some methodes which has this keyword to define its current context.
    this.scoerVal = scoerVal
}


// inject methods
createUser.prototype.incrementVal = function () {
    // scoerVal++
    this.scoerVal++
}

createUser.prototype.printVal = function () {
   console.log(`the Score is ${this.scoerVal}`);
}

// console.log(createUser.prototype);


//NOTE - Here in this case both userOne and userTwo does not have the current context that is why to provide the current context we have to write 'this' keyword explicitly.

//NOTE - After resolving the current context issue we will face another issue that is cannot read the properties of undefined. Although in the memory stack the value is loaded as well as the externally given property is definetly injected cause when we console.log() the function and try to access the prototype it will be shown there but in result we get undefined. That is because when we define arguments of a function and transfer the values into a variable we have not explicitly defined the variable that we have injected an additional property. That is why we use 'new' keyword to define new instances.

// let userOne = createUser("munna", 58)
// let userTwo = createUser("tannani", 45)

let userOne = new createUser("munna", 58)
let userTwo = new createUser("tannani", 45)

userOne.incrementVal()
userOne.printVal()

console.log(userOne);



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
