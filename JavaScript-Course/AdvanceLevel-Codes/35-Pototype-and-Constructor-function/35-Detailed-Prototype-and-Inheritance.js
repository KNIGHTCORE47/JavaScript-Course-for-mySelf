//*************** Prototype ****************//


// let myName = "bulla   ";
// console.log(myName.length);

// here we want to create a property as .length using additional prototype that define the true length of a string without spaces and we want to inject that method/functionality to all the strings as well.

let myName = "bulla   ";
let myName02 = "appuKhote   ";

// console.log(myName.length);


let myHeros = ["hulk", "wolverine"]

let heroPowers = {
    hulk: "smash",
    wolverine: "claws",


    getThePower: function () {
        console.log(`Wolverine power is ${this.wolverine}`);
    }
}


// heroPowers.powerUp()        // the method .powerUp() is not available as default but we can add this method externally.

// NOTE - WE ALL KNOW THAT IN JS EVERY DTA TYPE IS ULTIMAYELY AN OBJECT UNDER THE HOOD. THAT IS WHY IF WE DEFINE AN ADDITIONAL METHOD TO THE CORE OBJECT ALL OTHERS CAN USE THAT METHOD AS WELL.

Object.prototype.powerUp = function () {
    console.log(`The additional method define in the core OBJECT is accessable to any array, string, function or object as well`);
}

// heroPowers.powerUp() 
// myName02.powerUp()



// NOTE - here we noticed that we can also add an external method to the strings as well.

String.prototype.trueLength = function () {
    console.log(`the trueLength of the string is: ${this.trim().length} and the string is: "${this.trim()}"`);
}

myName.trueLength()
myName02.trueLength()

"husbulla    ".trueLength()
"           jimikutta".trueLength()



// heroPowers.trueLength()     // here it return nothing because the defined method .trueLength() is the additional method of String data type and not of Array data type.





//******************* INHERITANCE ********************//

//NOTE - INHERITANCE basically is that how an object can access properties of another object.


const userId = {
    loginName: "nuuni",
    emailId: "nunni@nunna.com"
}

const Teacher =  {
    makeVideo: true,
}

const TeachingSupport =  {
    isAvailable: false,
}

// NOTE - This is the Outdated Approach

const TASupport =  {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport      // to link the objects
}


//NOTE - we can also access that __proto__ property outside of the object

Teacher.__proto__ = userId 

// NOTE - Modern Approach

Object.setPrototypeOf(TeachingSupport, Teacher)     // NOTE - Sets the prototype of a specified object o to object proto or null. Returns the object o. Here the 1st parameter is reciver and the 2nd parameter is the doner means the 1st parameter can access the properties of the 2nd parameter.

