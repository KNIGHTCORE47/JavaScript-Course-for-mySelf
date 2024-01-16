//Numbers

const score = 400;
console.log(score);

const bankAccount = new Number(8000);
console.log(bankAccount);
console.log(bankAccount.toString());
console.log(bankAccount.toString().length);
console.log(bankAccount.toFixed(3));

const Num = 31.5494;

console.log(Num.toPrecision(2));

const mobNum = 8145937586;

console.log(mobNum.toLocaleString());       //US standerds

console.log(mobNum.toLocaleString('en-IN'));       //INDIA standerds


// Math library

console.log(Math);
console.log(Math.abs(-96));     //negetive to positive
console.log(Math.round(75.23));     //roundoff
console.log(Math.ceil(5.1));        //top value
console.log(Math.floor(5.9));       //bottom value
console.log(Math.min(5,51,45,1,2,7));       //find minimum value


console.log(Math.random());     //provide number from 0 to 1 
console.log((Math.random()*10) + 1);        //  if the provided num is 0 then +1 increase that by one

const minNum = 10;
const maxNum = 20;

console.log(Math.floor(Math.random()*(maxNum - minNum + 1) + minNum));      //general formula for  getting values in between a to b.