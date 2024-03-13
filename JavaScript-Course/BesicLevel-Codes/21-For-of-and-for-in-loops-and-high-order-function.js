/*********************for of loop**********************/

//NOTE -It is primarily used for arrays but can be used for others too.

//["", "", ""]
//[{}, {}, {}]

/*on Arrays*/

const myArray = [1,2,3,4,5,6,7];

for (const iterator of myArray) {
    // console.log(iterator);
}

/*on Strings*/

// const myString = "hellow world!";

// for (const iterator of myString) {
//     console.log(iterator);
// }

const myString = "this a string";

for (const iterator of myString) {
    if (iterator == " ") {
        // console.log("sorry for the space");
        continue
    }
    // console.log(iterator);
}

/*on Maps*/  

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//NOTE - Map is known for its unique values and able of memorizing the order of the values.

const mapData = new Map();

mapData.set('JS', 'JavaScript');
mapData.set('CPP', 'C++');
mapData.set('Rb', 'Ruby');
mapData.set('Py', 'Python');

// console.log(mapData);

for (const key of mapData) {
// console.log(key);
}   //it will give the whole values as an array

for (const [key,values] of mapData) {
    // console.log(`${key} is the short form of - ${values}`);  
}       //here we have destructured the elements into key and values


/*on Objects*/

//NOTE - for of loop does not work in case of objects show in here - 

const myObject = {
    'book01' : '599/-',
    'book02' : '299/-',
}

// for (const [key, values] of myObject) {
//     console.log(`${key} has price of - ${values}`);  
// }       // it will give TypeError: myObject is not iterable

const myObject02 = {
    book01 : '599/-',
    book02 : '299/-',
}

// for (const [key, values] of myObject02) {
//     console.log(`${key} has price of - ${values}`);  
// }       // it will give TypeError: myObject is not iterable





/**************************for in loop*********************/

//NOTE -It is primarily used for to iterate objects but can be used for others too.


/*on Objects*/

const myObject03 = {
    book01 : '599/-',
    book02 : '299/-',
    book03 : '599/-',
    book04 : '249/-',
    book05 : '799/-',
}

for (const key in myObject03) {
    // console.log(`${key} has price of - ${myObject03[key]}`);
}


const myObject04 = {
    book01 : '599/-',
    book02 : '299/-',
    book03 : '599/-',
    book04 : '249/-',
    book05 : '799/-',
}

for (const key in myObject04) {
    if (myObject04.hasOwnProperty.call(myObject04, key)) {
        const element = myObject04[key];
    // console.log(`${key} has price of - ${element}`);  
        
    }
}

/*on Arrays*/

const myArray02 = ["a", "b", "c", "d", "e"];

for (const key in myArray02) {
    // console.log(key, myArray02[key]);
}

/*on Maps*/  

const mapData02 = new Map();

mapData02.set('JS', 'JavaScript');
mapData02.set('CPP', 'C++');
mapData02.set('Rb', 'Ruby');
mapData02.set('Py', 'Python');

for (const key in mapData02) {
    console.log(key);
}



/***********high order function***************/

/*********************for each loop******************/

const pokemon = ["pickachu", "charizard", "bulbasaur", "squirtle", "infernape"];

const itemsPokemon = (items) => {
    // console.log(items);
}

pokemon.forEach(itemsPokemon)   //we just need to give the reference thats is there is no need to execute the function

pokemon.forEach(function(values, key) {
    // console.log(values);
})

pokemon.forEach((items, index) => {
    // console.log(index);
    // console.log(items);
})


pokemon.forEach(function(items, index, array) {
    // console.log(array);
})


/*on ArryObject*/

const myArrayObject = [
    {
        languageName: "JavaScript",
        languageFileExtention:  "js"
    },
    {
        languageName: "TypeScript",
        languageFileExtention:  "ts"
    },
    {
        languageName: "Ruby",
        languageFileExtention:  "rb"
    },
    {
        languageName: "Python",
        languageFileExtention:  "py"
    },
]

myArrayObject.forEach( (items) => {
    // console.log(items.languageName);
    console.log(items.languageFileExtention);
})