//OBJECT LITERALS

// NOTE - object literal means literally an object. In JS it is the base unit of anything. 

// this for define the current context

const userData = {
    userName: "Munna",
    emailId: "munna@gmail420.com",
    isLoggedIn: true,

    callingMethod: function () {
        console.log("abba chabba dabba");
        console.log(this);      // this keyword - this is used to define the current context

        // console.log(`${userName} tera email hain ${emailId}`);   // here it will give ReferenceError: userName is not defined because we have not defined the current context to the method

        console.log(`${this.userName} tera email hain ${this.emailId}`);

    }
}

// console.log(userData.emailId);
// console.log(userData.callingMethod());



//NOTE - in node environment we get an empty parentesis {} but in browser the current context of global object is window object.

// console.log(this);      






//create multiple objects without constructor function

// let myObj = {
//     superHero: "SuperMan",
//     powerLevel: 5,
//     costumeColor: "blue and green",

//     Weakness: function () {
//         console.log(`Kryptonite is the weakness of ${this.superHero}`);
//     }
// }

// let myObj02 = {
//     superHero: "BatMan",
//     powerLevel: 1,
//     costumeColor: "black",

//     Weakness: function () {
//         console.log(`no Power is the weakness of ${this.superHero}`);
//     }
// }







// CONSTRUCTOR FUNCTION

/*
In JavaScript, a constructor function is a special type of function that serves two main purposes:

1. Creating Objects:

We use a constructor function to create new objects. It acts as a blueprint that defines the properties and behaviors (methods) that all instances (objects) created from it will share.
When you call a constructor function using the new keyword, JavaScript creates a new object, initializes it with the properties and methods defined in the constructor, and then returns the newly created object.


2. Initialization:

A constructor function can be used to perform any necessary initialization tasks for the object, such as setting default values for properties or allocating memory.
*/



// const promiseOne = new Promise();
// const date = new Date()



// NOTE - here the new keyword is the constructor function. Constructor function new allow us to create multiple instances from a single object literal. The new keyword is used to create the fresh context.


// function comicsDC(superHero, powerLevel, costumeColor) {
//     MysuperHero = superHero,        // usually in coding practices we used to define the variables and the parameters/arguments with the same name. For that we have to define the variables with the same declaration as arguments causes confusion, to avoid that we use this
// }

//NOTE - always remember ---left side for variable declaration--- and ---right side for argument declaration---


function comicsDC(superHero, powerLevel, costumeColor) {
    this.superHero = superHero
    this.powerLevel = powerLevel
    this.costumeColor = costumeColor

    this.Weakness = function () {
        console.log(`no Power is the weakness of ${this.superHero}`);
    }

    return this     //it helps to return the current context although it is defined implicitly, that is why we have no need to define it explicitly
}

// const heroOne = comicsDC("superMan", 5, "blue and red")     
// const heroTwo = comicsDC("batMan", 1, "black and gray")

// console.log(heroOne);
// console.log(heroTwo);


//NOTE - in case of heroOne the value will never be seen in console.log() cause the values of heroTwo is overwritten the values of heroOne but with the help of new keyword we have created two differnt instances/copy from that function function comicsDC() {}

// const heroOne = new comicsDC("superMan", 5, "blue and red")     
// const heroTwo = new comicsDC("batMan", 1, "black and gray")

// console.log(heroOne);
// console.log(heroTwo);


/* NOTE --- 
            STEP-01. Upon invoke new keyword create a empty object which is called the instance

            STEP-02. A Constructor function is called due to new keyword, it helps wrap all the argument and give it to us.

            STEP-03. The this keyword were injected inside of all the arguments

            STEP-04. We get the values inside of the function

*/


//ABOUT - constructor => it is nothing but a reference about itself


const heroOne = new comicsDC("superMan", 5, "blue and red")
const heroTwo = new comicsDC("batMan", 1, "black and gray")

// console.log(heroOne);
// console.log(heroTwo);




// NOTE - constructor Property --> constructor Property give us refernce about the object itself

// console.log(heroOne.constructor);



//instanceof operator

