// Inheritance


class userLogin {
    constructor(userName) {
        this.userName = userName;
    }

    isLoggenIn() {
        if (true)  return console.log(`USERNAME: ${this.userName} is logged in`)
        else console.log('Error')
    }
}

class animeChar extends userLogin {
    constructor(userName, emailId, password) {
        super(userName)
        
        this.emailId = emailId;
        this.password = password;
    }

    seasonRenew() {
        return console.log(`hay ${this.userName} your season is renewed`)
    }
}



let userOne = new animeChar("darkness", "darknessgt@glaim.com", "darkness125")

console.log(userOne);
userOne.isLoggenIn();
userOne.seasonRenew();

let userTwo = new userLogin("Kazuma")

userTwo.isLoggenIn();




console.log(userOne === userTwo);

console.log(userOne === animeChar);

console.log(userOne instanceof animeChar);

console.log(userOne instanceof userLogin);
