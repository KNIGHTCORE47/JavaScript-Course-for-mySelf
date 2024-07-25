//******************* Getter and Setter using defineProperty() *******************//

// NOTE - In JS we all know that every funcion acts as a function as well as an Objects, so we can access the default properties of an object in this case.



// NOTE - Object.defineProperty() is the inbuild property of Getter and Setter. Object.defineProperty() does not have its own this keyword so we have explicity add it as the first parameter of this method. The second parameter is the variable which we want to overwrite.


/* (method) ObjectConstructor.defineProperty<any>(o: any, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): any
Adds a property to an object, or modifies attributes of an existing property.

@param o — Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.

@param p — The property name.

@param attributes — Descriptor for the property. It can be for a data property or an accessor property. */



function userAnother(emailId, password) {
    this._emailId = emailId
    this._password = password

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
    
    Object.defineProperty(this, 'emailId', {
        get: function () {
            return this._emailId.toUpperCase()
        },
        set: function (value) {
            this._emailId = value
        }
    })
}


const userOne = new userAnother("jhd@fgdt.com", "fjaesdfheuy")
console.log(userOne.password);
console.log(userOne.emailId);
