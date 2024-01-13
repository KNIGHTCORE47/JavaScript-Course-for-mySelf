// NOTE - There are mainly two catagories of dataTypes available called PRIMITIVE DATATYPE and NON_PRIMITIVE DATATYPE in JS based on how it is assinged/stored inside the memory and how can we access that dataType.

// PRIMITIVE DATATYPE(Value type) -

// Strings, Number, Boolean, null, undefined, Symbol, BigInt

const score = 2;
const ScoreVal = 100.3;

const isVerified = false;
const environmentTemp = null;
const wantToEat = undefined;    // or const wantToEat;

const id = Symbol('69');
const anotherId = Symbol('69');

console.log(id === anotherId);

const bigNum = 312457893655423294542614546n;


// NON_PRIMITIVE DATATYPE(Reference type)

// Array, Objects, Functions

const myPcNow = ["Ryzen 5600", "xpg 8gb 3200Mhz X 2", "AsRock B550", "Rx 6700 10gb", "Kingston NV2 1tb NVME ssd", "DeepCool AK500", "Cooler Master CM650 80+ bronze", "Cooler Master CMP 520 case"];

const myOldPc = {
    CPU: "intel i3 4300",
    MOTHERBOARD: "Gigabyte",
    RAM: "Kingston 4gb DDR3",
    GRAPHICS_CARD: "Zotac gt610 2gb",
    OPTICAL_DRIVE: "LG",
    STORAGE: "2tb Seagate HDD",
    PSU: "iNTEX 600watt",
    PC_CASE: "Frontech"
};

const myFunc = function() {
    console.log("tum HUTIYE ho!");
};

myFunc();   // It is the function-object type though typeof prints function.

console.log(typeof myFunc);