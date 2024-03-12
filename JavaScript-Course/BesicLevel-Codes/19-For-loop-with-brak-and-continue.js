//Iterations


// for loop - 1.declaired variable(let index = 0), 2.condition check(index < array.length), 3.iterator(index++)

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i < 20; i++) {
    const element = i;
    if (element == 5) {
        // console.log("it it my roll no");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    const elementOuter = i;
    // console.log(`outer loop : ${elementOuter}`);
     for (let j = 0; j <= 2; j++) {
        const elementInner = j;
    // console.log(`outer loop : ${elementOuter} & inner loop : ${elementInner}`);  
    // console.log(`${elementOuter}*${elementInner} = ${elementOuter*elementInner}`); 
     }
}

let myArray01 = ["superMan", "batMan", "wonderWoman"];
// console.log(myArray01.length);

for (let index = 0; index < myArray01.length; index++) {
    const dcHeros = myArray01[index];
    // console.log(dcHeros);
}



//break and continue

//NOTE- in case of break it will terminate the rest of the code to be execute

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        // console.log("detected no. 5");
        break
    }

    // console.log(`the whole iteration of i is ${i}`);
}


//NOTE- in case of continue it will not terminate the rest of the code, after detect it will apart from that iterate value execute the rest 

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("detected no. 5");
        continue
    }
    console.log(`the whole iteration of i is ${i}`);
}