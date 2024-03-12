//while loop

let i = 0;

while (i<=10) {
    // console.log(`value of i : ${i}`);
    i+=2;
}

let computerPeriferals = ["monitor", "cpu", "keyboard", "mouse", "ups", "router"];

let index = 0;

while (index < computerPeriferals.length) {
    // console.log(computerPeriferals[index]);
    index++;
}



//do while loop

//NOTE - in do while it's 1st priority is to execute the value then check the conditions

// let powerLevelMax = 0;

// do {
//     console.log(`unlock level ${powerLevelMax}`);
//     powerLevelMax++
// } while (powerLevelMax<=20);


let powerLevelMax = 20;

do {
    console.log(`unlock level ${powerLevelMax}`);   //in this special case it will give the value 20
    powerLevelMax++
} while (powerLevelMax<=12);