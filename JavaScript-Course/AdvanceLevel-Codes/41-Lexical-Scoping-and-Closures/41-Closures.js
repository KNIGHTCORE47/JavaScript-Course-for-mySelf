//************** Closures ********************//



function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();




function bgChanger(bgColor) {
    // document.body.style.backgroundColor = `${bgColor}`

    // return () =>  document.body.style.backgroundColor = `${bgColors}`
    return () =>  document.body.style.backgroundColor = `${bgColor}`
}


let buttonOne = document.getElementById("btnOne")

let buttonTwo = document.getElementById("btnTwo")


buttonOne.onclick = bgChanger("green")
buttonTwo.onclick = bgChanger("blue")