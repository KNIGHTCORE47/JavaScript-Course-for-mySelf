// static prop

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        return console.log(`userName: ${this.username}`);
    }

    static restrictedMethod() {
        return console.log(Math.floor(Math.random() * 10));
    }
}


const testUser = new User("testName")
console.log(testUser);

testUser.logMe()
// testUser.restrictedMethod()

class Teacher extends User {
    constructor(username, emailId, password) {
        super(username)
        this.emailId = emailId
        this.password = password
    }
}

const userOne = new Teacher("lalln", "lallan@glaim.moc", "lallan@#$%^&*(")

console.log(userOne);

userOne.logMe()
// userOne.restrictedMethod()