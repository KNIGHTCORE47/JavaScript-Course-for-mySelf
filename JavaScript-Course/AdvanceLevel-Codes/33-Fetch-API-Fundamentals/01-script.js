

// Fetch - The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.



// fetch("https://randomuser.me/api/")
// .then((response) => {
//     return response.json()
// })
// .then((convertedValue) => {
//     console.log(convertedValue);
// })
// .catch((error) => {
//     console.log("ERROR PAGE NOT FOUND");
// })


// NOTE -- A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

fetch("https://randomuser.me/api/")
    .then((response) => {
        // console.log(response);
        return response.json()
    })
    .then((acceptedValues) => {
        // console.log(acceptedValues);
        return fetch("https://randomuser.me/api/")
    })
    .then((response02) => {
        return response02.json()
    })
    .then((acceptedValues02) => {
        // console.log(acceptedValues02);
    })
    .catch((error) => {
        // console.log("Error!");
    })


// NOTE - Fetch is async in nature and has a special TASK QUEUE called MICRO TASK QUEUE. It is a type of priority queue, that is whay if any async code has the same amount of time to execute the value, the response of the fetch will alwase be the first to execute. Like any async code as setTimeout() is called, it goes to REGISTER CALL BACK then to CALL BACK QUEUE/TASK QUEUE and added inside of the CALL SATCK on the the top of other functions to execute upon its designated period of time. But in case of fetch due the special type of TASK QUEUE it the first priority to execute first. All the execution is monitored by EVENT LOOP.


//fetch with additional data 

let headerData = {
    JS: "JavaScript",
    PY: "Python"
}

fetch("https://randomuser.me/api/", { headerData })
    .then((response) => {

        console.log(headerData.JS);

        return response.json()

    })
    .then((finalValues) => {
        console.log(finalValues);
    })
    .catch((error) => {
        console.log("ERROR");
    })



// NOTE - fetch working process (BTS)

/*

respons = fetch("simething", {})


it has two parts ---
                    01. one goes to web browser/node
                            a. network request
                                    a1. resolve
                                    b1. reject

                    02. other goes to to memory for space allocation
                            a. on fullfilled []
                            b. on Rejection []
*/