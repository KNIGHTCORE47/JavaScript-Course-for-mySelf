const timeHoldVariable = document.querySelector(".holdingTime");

setInterval(() => {
    const dateTime = new Date();

    let timeValues = document.createTextNode(dateTime.toLocaleTimeString())

    timeHoldVariable.appendChild(timeValues)

    setInterval(() => {
        timeHoldVariable.removeChild(timeValues)
    }, 980);
}, 1000);

