//In JavaScript some defined objects has their own defined properties and we all know that under the hood every thing in JS is ultimatly an object itself. For that type of default properties they are not writable, enumerable and configurable as well.

// NOTE - like a question that is --> in JS the value of Math.PI is 3.141592653589793, so can we change the value of it or can not give defination.

/* NOTE - Answer --> We can not because the Math.PI is a constant and under the hood has
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}  

this type of hard coded values which are not rewritable.
*/


let testValue = 5
testValue = 9
// console.log(testValue);


// console.log(Math.PI)
Math.PI = 5
// console.log(Math.PI)


/* NOTE - 

(method) ObjectConstructor.getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined
Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

@param o — Object that contains the property.

@param p — Name of the property. 

*/


const testObject = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(testObject);



// NOTE - so in that case a new question arrives that is --> if that is the case can we also create some kind of objects that has this type of properties for that they will be not writable, enumerable and configurable as well..?

// NOTE - the Answer is --> YES

// METHODOLOGY --> with the help of - FACTORY FUNCTION

const myObject = Object.create(null)    // it has null as it's deafult value 

// METHODOLOGY --> with the help of - normal object

let myObject02 = {
  firstName: "abba",
  middleName: "chabba",
  lastName: "dabba",

  objDisrupter: function () {
    console.log(`ey code to phatt gei`);
  }
}

for (let [key, values] of Object.entries(myObject02)) {
  if (typeof values !== 'function') {
    console.log(`the ${key} is ${values}`);
  }
}

console.log(Object.getOwnPropertyDescriptor(myObject02, "firstName"));

Object.defineProperty(myObject02, "firstName", {
  writable: false,
  enumerable: false,
  configurable: false
})

console.log(Object.getOwnPropertyDescriptor(myObject02, "firstName"));




for (const key in myObject02) {
  if (myObject02.hasOwnProperty.call(myObject02, key)) {
    const element = myObject02[key];
    if (typeof element !== 'function') {
      console.log(`the ${key} is ${element}`);
    }
  }
}