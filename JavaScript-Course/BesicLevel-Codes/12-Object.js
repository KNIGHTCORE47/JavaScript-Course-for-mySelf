// Singleton
//  Object.create

//object literals

//QS. take a symbol, define it, add it into a object as a key with a proper syntax

let MONITOR = Symbol("Key01");

let SPEAKER = Symbol("Key02");

const myOldPc = {
    CPU: "intel i3 4300",
    MOTHERBOARD: "Gigabyte",
    RAM: "Kingston 4gb DDR3",
    "GRAPHICS_CARD": "Zotac gt610 2gb",
    OPTICAL_DRIVE: "Samsung",
    STORAGE: "2tb Seagate HDD",
    PSU: "iNTEX 600watt",
    PC_CASE: "Frontech",
    MONITOR: "Dell 18.9inch",   // the value will be same but the type will be string in nature
    [SPEAKER]: "Creative_2.1",  // it is the proper way to define a symbol as a key in a object
};

console.log(myOldPc.CPU);
console.log(myOldPc["GRAPHICS_CARD"]);
console.log(myOldPc.MONITOR);
console.log(typeof myOldPc.MONITOR);
console.log(myOldPc[SPEAKER]);

// to change any object in a excisting object

myOldPc.OPTICAL_DRIVE = "LG";

console.log(myOldPc.OPTICAL_DRIVE);
console.log(myOldPc);

// To freeze an object we use this method

Object.freeze(myOldPc);     // while using it we can not change any aspect of this object

myOldPc.OPTICAL_DRIVE = "SONY";
console.log(myOldPc.OPTICAL_DRIVE);     // it will not throw any error but the values will not propagate either



let myObj01 = {
    myFunc: function () {
        console.log("From the func");
    },
};

myObj01.Greet = function () {
    console.log("With Love");
}

// console.log(myObj01);
console.log(myObj01.myFunc);    //it will return the reference of that function though the function will ne be executed
console.log(myObj01.Greet);

console.log(myObj01.myFunc());  // in this case the function will be executed and return the function value
console.log(myObj01.Greet());

let myObj02 = {
    name: "ABC",
    book: "xyz"
}

myObj02.Greet = function () {
    console.log(`hello ${this.name}. I have read your book ${this.book}. It is facinating.`);
}

console.log(myObj02.Greet());



/*********************************************************************************/

//Singleton object
// let cornHub = Object.create();

//object literals
let cornHub = {};

cornHub.id = "123abc";
cornHub.email = "abc@hotmail.com";
cornHub.password = "123#41hT2";

console.log(cornHub);



let cornHub02 = {
    id : "123abc",
    fullName : {
        name : "abc",
        surname : "def",
        userName: {
            uName: "ABC",
            uSurname: "DEF",
        },
    },
    email : "abc@hotmail.com",
    password : "123#41hT2",
};

console.log(cornHub02);
console.log(cornHub02.fullName);
console.log(cornHub02.fullName.userName);

//Optional chaining

console.log(cornHub02.fullName?.userName.uSurname);

