//******************* Getter and Setter using Object base syntax *******************//


// NOTE - here if any variable is defined with _xyz its called private property.

const User = {
    _emailId: "adsj@hgsad.com",
    _password: "hjafsd",

    get emailId() {
        return this._emailId.toUpperCase()
    },

    set emailId(value) {
        this._emailId = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set password(value) {
        this._password = value
    },
}

console.log(User.emailId);
console.log(User.password);

let userNew = Object.create(User)
console.log(userNew.password);