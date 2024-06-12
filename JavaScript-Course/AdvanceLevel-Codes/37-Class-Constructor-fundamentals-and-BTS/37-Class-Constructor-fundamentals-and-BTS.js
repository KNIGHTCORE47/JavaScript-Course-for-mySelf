//********************** Class Constructor ******************//

class userLogin {
    constructor(userName, emailId, password) {
        this.userName = userName;
        this.emailId = emailId;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}%^$#G`
    }

    changeUserName() {
        return `${this.userName.toUpperCase()}`

    }
}

let userOne = new userLogin("aqua", "aquagt@glaim.com", "aquya125")

console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.changeUserName());





// Class Constructor -- UNDER THE HOOD

function userLoginBTS(userName, emailId, password) {
    this.userName = userName;
    this.emailId = emailId;
    this.password = password;
}

userLoginBTS.prototype.encryptPassword = function () {
    return `${this.password}%^$#G`

}


userLoginBTS.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`
}

let userTwo = new userLoginBTS("megumin", "megumingt@glaim.com", "megumin125")

console.log(userTwo);
console.log(userTwo.encryptPassword());
console.log(userTwo.changeUserName());
