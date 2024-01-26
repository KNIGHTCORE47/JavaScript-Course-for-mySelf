//object destructuring

let Avengers = {
    ONE: "Iron-Man",
    TWO: "Captain-America",
    THREE: "Thor",
    FOUR: "Black-Widow",
    SIX: "Hawk-Eye",
}

let { SIX } = Avengers;
let { TWO } = Avengers;

console.log(SIX);
console.log(TWO);


// Concept JSON 
/*  {
    "employees": [
        { 
            "firstName": "John", "lastName": "Doe" 
        },
        { 
            "firstName": "Anna", "lastName": "Smith" 
        },
        { 
            "firstName": "Peter", "lastName": "Jones" 
        }
    ]
}

//it also can be like this

{
    {},
    {},
    {}
}

`*/