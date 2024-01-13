const accountId = "account123";     // we can not change/ redefine const value/ memory allocation
 
let accountEmail = "account1223@hotmail.com";    // 

var accountPassword = "acc#1233Pass";

// accountId = 3;   //not allowed

accountEmail = "account123@hotmail.com"; 

accountPassword = "acc#123Pass";

accountCity = "Kolkata"; 

let accountState;     //if we not initalize this variable it will give us undefined

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


/* 
Note - In old JS it has a problem which is there is no proper understanding about scope denotes with {} , scopes like block scope and functional scope, old JS failed to understand that, like if a dev define a var in a code and another dev unintentionally also use that var in a different scope, the initial value of that var chanages everywhere in the code breaking the logics. So in modern JS ES6 we use let to prevent this types of errors 
*/