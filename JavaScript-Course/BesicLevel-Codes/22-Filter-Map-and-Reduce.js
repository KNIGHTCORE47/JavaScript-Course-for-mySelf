//forEach loop has its own limitation like if hold it in a variable it does not return the values. Example - 

const myArray =[1,2,3,4,5,6,7,8,9];

// const arrayItems = myArray.forEach((items) => {
//     // console.log(items);     //here it does not return the value
//     return items    //return undefined
// })

// console.log(arrayItems);   

//NOTE - sometimes for we as dev wants to return a value or check condition. for that we user filter




/************filter method**********/

//NOTE - filter relied mainly upon True or False!

// const arrayItems = myArray.filter((items) => {
//     return items     //it will return the whole array
// })

// const arrayItems = myArray.filter((items) => {
//     return items >= 6
// })

//OR

const arrayItems = myArray.filter((items) => items >= 6)

// console.log(arrayItems);  

const studentsMarks = [
    {name:"Aba", rollNo:5, section: "A", examMarks: 20},
    {name:"Obula", rollNo:35, section: "B", examMarks: 40},
    {name:"Leko", rollNo:9, section: "A", examMarks: 18},
    {name:"Dyjo", rollNo:25, section: "C", examMarks: 35},
    {name:"Nonahady", rollNo:5, section: "C", examMarks: 52},
    {name:"Juha", rollNo:12, section: "B", examMarks: 20},
    {name:"Hytrq", rollNo:5, section: "B", examMarks: 10},
    {name:"uleku", rollNo:7, section: "A", examMarks: 61},
    {name:"Abhudebaq", rollNo:18, section: "C", examMarks: 33},
    {name:"Kupiya", rollNo:21, section: "C", examMarks: 21},
    {name:"Hobo", rollNo:14, section: "A", examMarks: 72},
    {name:"Zeu", rollNo:3, section: "B", examMarks: 18},
    {name:"Xka Xka", rollNo:27, section: "C", examMarks: 20},
    {name:"Wuoabpff", rollNo:7, section: "B", examMarks: 30},
    {name:"Enyjxe", rollNo:1, section: "B", examMarks: 84},
    {name:"Vuzluw", rollNo:17, section: "A", examMarks: 25},
    {name:"Chothenax", rollNo:21, section: "A", examMarks: 52},
];

const studentAboveMarks = studentsMarks.filter((items) => {
    return items.examMarks >= 55 && items.section === "A"
})

// console.log(studentAboveMarks);




/***********************map method**********************/

const myArray02 =[1,2,3,4,5,6,7,8,9];

// console.log(myArray02);

let holdValues01 = myArray02.map((items) => items*10)

// console.log(holdValues01);


//****Concept of Chaining****//

let holdValues02 = myArray02
                    .map((items) => items*10)
                    .map((items) => {
                        return items+50
                    })
                    .filter((items) => items>50);

// console.log(holdValues02);




/*******************reduce method*****************/

/*NOTE - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


*/

let myNums = [1,2,3];

const initialValue = 0;

// const reduceValue = myNums.reduce( function(accumulator, currentValue) {
//         console.log(`the accumulator valeue is ${accumulator} and the currentValue is ${currentValue}`)
//         return accumulator + currentValue
//     }, initialValue);

// const reduceValue = myNums.reduce((accumulator, currentValue) => {
//     console.log(`the accumulator valeue is ${accumulator} and the currentValue is ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue);

// const reduceValue = myNums.reduce((accumulator, currentValue) => 
// (console.log(`accumulator valeue is ${accumulator} and the currentValue is ${currentValue}`),
// accumulator + currentValue), 4);

// console.log(reduceValue);

const shoppingCart = [
    {cpu: "ryzen 5 5600", price: 13999},
    {motherBoard: "asRock B550 PG", price: 9999},
    {ram: "xpg d30 8gb 3200mhz", price: 1499},
    {ram: "xpg d30 8gb 3200mhz", price: 1499},
    {gpu: "rx 6700 10gb", price: 26999},
    {psu: "coolerMaster 650Watt Bronze", price: 5999},
    {cabinet: "coolerMaster CM20", price: 4999},
]

const totalCpuCost = shoppingCart.reduce((acc, items) => (acc + items.price), 0);

// const totalCpuCost = shoppingCart.reduce((acc, {price}) => (acc + price), 0);

console.log(`my total cpu cost is ${totalCpuCost}`);