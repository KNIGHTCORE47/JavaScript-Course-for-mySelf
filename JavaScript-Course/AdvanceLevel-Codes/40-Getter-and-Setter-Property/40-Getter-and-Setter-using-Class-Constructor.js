//******************* Getter and Setter using Class Constructor *******************//

// NOTE - Usage of GETTER and SEETER 

// In JS some times we have to customize the input values get from users for verious reasons. In that case we will conserve the actual values but tweak it a little bit. Methods like Getter and Setter are used for this perpose.

// NOTE - Classes alwase have Getters and Setters by default, but they have their own default behavior. To controll them we can attach Getter or Setter on the properties/variable of the class constructor like -->> get emailId() {} or, set emailId(value) {} .





//******************* Normal Class Constructor ************************//

// class User {
//     constructor(emailId, password){
//         this.emailId = emailId
//         this.password = password
//     }

// }

// let userOne = new User("nel@gliam.com", "abg*&^%")
// console.log(userOne.emailId);





//************************** Class Constructor with Getter ***********************//


// NOTE - we can not use only Getter or Setter method, if we did that it will give us TypeError: Cannot set property emailId of #<User> which has only a getter.

// class User {
//     constructor(emailId, password){
//         this.emailId = emailId
//         this.password = password
//     }

//     get emailId() {
//         return this.emailId.toUpperCase()
//     }
// }

// let userOne = new User("nel@gliam.com", "abg*&^%")
// console.log(userOne.emailId);





//************************** Class Constructor with both Getter and Setter ***********************//

// NOTE - Setter sets the values that is why it holds a parameter.

// NOTE - Here in this case the constructor and the Setter both trying to set the values at the same time invokes a race between them resulting fill up the call stack and give us RangeError: Maximum call stack size exceeded at set emailId [as emailId].


// class User {
//     constructor(emailId, password){
//         this.emailId = emailId
//         this.password = password
//     }

//     get emailId() {
//         return this.emailId.toUpperCase()
//     }

//     set emailId(value) {
//         this.emailId = value
//     }
// }

// let userOne = new User("nel@gliam.com", "abg*&^%")
// console.log(userOne.emailId);






//************* DEBUGGED CODE ***************//


// NOTE - To Tackle that situation we have set a new variable for the Setter property.

// NOTE - now we will face the problem ->  Maximum call stack size exceeded at get emailId [as emailId] for the same reason. So we also have to declare a new variable for the Getter property as well.

// class User {
//     constructor(emailId, password){
//         this.emailId = emailId
//         this.password = password
//     }

//     get emailId() {
//         return this.emailId.toUpperCase()
//     }

//     set emailId(value) {
//         this._emailId = value
//     }
// }

// let userOne = new User("nel@gliam.com", "abg*&^%")
// console.log(userOne.emailId);





//************* FURTHER DEBUGGED CODE ***************//


// NOTE - for Getter and Setter the newly declaired vaariable could be any thing but the best coding practice is to define them with same name but with a underscore as a prifix. like if a variable is -->    this.name = name  the Getter and Setter variable would be  -->   this._name

class User {
    constructor(emailId, password){
        this.emailId = emailId
        this.password = password
    }

    get emailId() {
        return this._emailId.toUpperCase()
    }

    set emailId(value) {
        this._emailId = value
    }

    get password() {
        return this.changePassword.toUpperCase()
    }

    set password(value) {
        this.changePassword = value
    }
}

let userOne = new User("nel@gliam.com", "abc")
console.log(userOne.emailId);
console.log(userOne.password);