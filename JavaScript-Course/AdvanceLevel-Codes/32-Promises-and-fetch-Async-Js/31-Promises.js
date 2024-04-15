//***************************** Promises *************************//

// fetch("https://fsdaz.com").then().catch().finally()      //It is not the method 

//NOTE - Promises are made to consume but we have learn first that how to create promises

//NOTE - new keyword is used for new instances

//NOTE - as a system promises are ment to be create and then consume, promises holds a callback function in it


//CREATE A PROMISE
const promiseOne = new Promise((resolve, reject) => {

    //NOTE-
    //DO AN ASYNC TASK
    // DB CALLS, CRYPTOGRAPHY, NETWORK etc.



    setTimeout(() => {
        console.log("async task complete");
        resolve()       //resolve() has also a property that is the ability to pass the returned value to the callback function of .then() as an argument
    }, 1000);
})


//CONSUME A PROMISE
promiseOne.then(() => {         // .then() also holds a callback function and has the direct connection with resolve state, to connect the resolve state to .then() we have to manually call resolve() inside of the promise. Here the callback function automatically receive an argument which is the return value of the created promise


    console.log("Promise is consumed");
})




//CREATE A PROMISE without holding it in a variable

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2 complete");
        resolve()
        reject()
    }, 1000);
}).then(() => {
    console.log("2nd Promise is consumed");
}).catch(() => {
    console.log('404 PAGE NOT FOUND');
})



// Pass the returned value to the callback function of .then() as an argument with the help of resolve()

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "bulla", emailId: "bullarakhtakhulla@example.com" })
    }, 1000)
})


promiseThree.then((items) => {
    console.log(items);
    console.log("3rd Promise is consumed");
})


promiseThree.catch(() => {
    console.log('404 PAGE NOT FOUND');
})




const promiseFoure = new Promise((resolve, reject) => {
    let error = false
    if (!error) {
        resolve({ userName: "ibuHatela", passWord: "khayegaKela" })
    } else (
        reject("ERROR: 404 PAGE NOT FOUND")
    )
})

// let returnedVal = promiseFoure.then((items) => {
//     console.log(items)
//     return items.userName
// })

// console.log(returnedVal);       //we can not consume promises like this, it will give error as --- UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: 404 PAGE NOT FOUND".

// promiseFoure
//     .then((items) => {
//         console.log(items)
//         return items.userName
//     })
//     .then((userName) => {
//         console.log(userName);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


promiseFoure
    .then((items) => {
        console.log(items)
        return items.userName       // here the return keyword is used to propagate the returnd value as the arguments into the callback function of that upcoming .then(), after that we can access that internal returned value
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() =>
        console.log("the promise is either resolved or rejected")
    )





let promiseTask01 = new Promise((resolve, reject) => {
    if (true) {
        resolve({ name: "babuRao", obsession: "red telePhone" })
    } else {
        reject("ERROR: SOMETHING WENT WRONG")
    }
})

promiseTask01
    .then((returnedValue) => {
        console.log(returnedValue);
        return returnedValue.name
    })
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            let statementValue = true
            if (!statementValue) {
                resolve("kam 25")
            } else {
                reject("warna 26")
            }
        })
    })
    .then((returnedValue02) => {
        console.log(returnedValue02);
        return new Promise((resolve, reject) => {
            resolve([0, "loggedIn", {
                nameTag: {
                    first: "mubla",
                    middle: "bul",
                    last: "das"
                },
                emailId: "mubla@gmoil.hotmail"
            }])
        })
    })
    .then((dataValues) => {
        console.log(dataValues);
        return dataValues[2].nameTag.first
    })
    .then((returnedValue03) => {
        console.log(returnedValue03);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("the promises has been done");
    })





// Promises with help of async await


// const promiseFive = new Promise((resolve, reject) => {
//     if (false) {
//         resolve("Promise is resolved 02")
//     }else {
//         reject("ERROR: Something Went Wrong!!05")
//     }
// })

// async function consumePromiseFive() {
//     let responseValue = await promiseFive
// }

// consumePromiseFive()        //NOTE - It will through an error - UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something Went Wrong!!05".

// NOTE - Async Await has a minor problem that is it can not handle errors primerily, if any request has a chance of failure than Async Await cant resolve that request


// Async Await request with the help of try{} and catch(){}

const promiseFive = new Promise((resolve, reject) => {
    if (false) {
        resolve("Promise is resolved 02")
    } else {
        reject("ERROR: Something Went Wrong!!05")
    }
})

async function consumePromiseFive() {
    try {
        let resolveState = await promiseFive
        console.log(resolveState);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




/*   NOTE NOTE - Difference between .json() vs JSON.parse()
 The difference is: json() is asynchronous and returns a Promise object that resolves to a JavaScript object. JSON.parse() is synchronous can parse a string to (a) JavaScript object(s)  */


//fetch

// const getAllUsers = async () => {
//     try {
//          const rawValue = await fetch("https://randomuser.me/api/")
//          const convertedValues = await JSON.parse(rawValue)     // it will through an error cause JSON.parse() is synchronous can parse a string to (a) JavaScript object(s)
//          console.log(convertedValues);
//     } catch (error) {
//         console.log("ERROR 404")
//     }
// }
// getAllUsers()



const getAllUsers = async () => {
    try {
        const rawValue = await fetch("https://randomuser.me/api/")
        console.log(rawValue);
        const convertedValues = await rawValue.json()
        console.log(convertedValues);
    } catch (error) {
        console.log("ERROR 404")
    }
}
getAllUsers()





// same function with the help of .then() and .catch() method

fetch("https://randomuser.me/api/")
.then((response) => {
    // console.log(response);
    return response.json()
})
.then((acceptedValues) => {
    console.log(acceptedValues);
})
.catch((error) => {
    console.log("Error!");
})