//Stack memory = here when stack memory uses, if any dev declare any variable and want to change the value, the inital declared value will not be change, whereas the dev will get a copy of it and those changes will occure inside that copied value.
// -- Primitive DataTypes

let maNem = "Knight";
let userName = maNem;
userName = "Core";

console.log(maNem);
console.log(userName);


//Heap memory = here when we need a reference we get the actual value / reference of the original value not a copied value and any changes will occure inside that value
// -- Non-Primitive DataType

let lunchObj = {
    stater: "Puri",
    maicourse: "Fried-Rice",
    sideDish: "Chilli-Chicken",
    desert: "Mishti-Dahi",
};
let newLunch = lunchObj;

lunchObj.desert = "Ice-Creame";

console.log(lunchObj.desert);
console.log(newLunch.desert);
