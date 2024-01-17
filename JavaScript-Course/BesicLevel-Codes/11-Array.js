let maroArray = [1,2,3,4,5,7];

let Avengers = new Array("IronMan", "CaptainAmerica", "Thor", "Hulk", "BlackWidow", "HawkEye");

// console.log(Avengers);
// console.log(Avengers[2]);

// Array Methods

maroArray.push(9);  //add value at behind
maroArray.push(962);
maroArray.pop()    //delete value from behind
maroArray.unshift(12);  //add values at the start and shifting all the other  arr values
maroArray.shift();      //delete 1st value of the array
// console.log(maroArray);

// console.log(maroArray.includes(20));

// console.log(maroArray.indexOf(16));


let Pokemon = ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Dragonite", "Weezel", "Chimchar", "Noctowl", "Bayleef", "Totodile", "Butterfree", "Pidgeot"];

// console.log(Pokemon.join());    //.join() change any array type into string
// console.log(typeof(Pokemon.join()));

// console.log("Initial", Pokemon);

let PokemonSlice = Pokemon.slice(2,5);      //Does not manipulate original array
// console.log(Pokemon);
// console.log("slice()", PokemonSlice);

let PokemonSplice = Pokemon.splice(2,5);    //Manipulate the original array
// console.log(Pokemon);
// console.log("splice()", PokemonSplice);


let alphaBets01 = ["A", "B", "C"];
let alphaBets02 = ["D", "E", "F"];

// alphaBets01.push(alphaBets02);      // not a proper way to add two or more arrays

let alphaBets03 = alphaBets01.concat(alphaBets02)   // also not a scalable way to add two or more arrays

console.log(alphaBets01);
console.log(alphaBets03);

// Spread Operator
let finalAlphabet = [...alphaBets01, ...alphaBets02]

console.log(finalAlphabet);

let peculierArrya = [1,2,3,[3,2,1,["humka", 'pata', "nahin"]]];

let letMeFixIt = peculierArrya.flat(Infinity);      //flat() method is used to liner any array which has another array in it as a value and with the help of depth like (Infinity) we can simplify the array whis has n amount array within
console.log(letMeFixIt); 

let qs1 = "abc";

console.log(Array.isArray(qs1));    //return a bool value
console.log(Array.from(qs1));   //convert any eliment into an array
console.log(Array.from({name: 'gulla'}));   //**it is an interesting case cause it will return an empty array [] so we have to mention what type of array we want like for keys or for values


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));