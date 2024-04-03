const selectForm = document.querySelector("form")

selectForm.addEventListener("submit", (event) => {
    event.preventDefault()



    //NOTE - here .value is used to get the typed value given in the input tag otherwise the value of hightVal is NaN in console.log()
    
    const hightVal = parseInt(document.querySelector("#height").value)        //convert the hightVal into an integer
    const weightVal = parseInt(document.querySelector("#weight").value)        //convert the weightVal into an integer
    const resultValueContainer = document.querySelector(".resultValue")

    const commentContainer = document.createElement("span")


    if (hightVal === " " || hightVal < 0 || isNaN(hightVal) || weightVal === " " || weightVal < 0 || isNaN(weightVal)) {
        resultValueContainer.appendChild(document.createTextNode("Please give a valid number"))
    } else {
        const calculateResult = ((weightVal / (hightVal * hightVal)) * 10000).toFixed(2)
        if (calculateResult > 25) {
            resultValueContainer.appendChild(document.createTextNode(calculateResult))
            commentContainer.appendChild(document.createTextNode("Bruh! you are overweight"))
            commentContainer.style.color = "red"
            resultValueContainer.appendChild(commentContainer)
        } else if (calculateResult < 18) {
            resultValueContainer.appendChild(document.createTextNode(calculateResult))
            commentContainer.appendChild(document.createTextNode("Daug! you are underweight"))
            commentContainer.style.color = "red"
            resultValueContainer.append(commentContainer)
        } else {
            resultValueContainer.appendChild(document.createTextNode(calculateResult))
            commentContainer.appendChild(document.createTextNode("Your weight is normal"))
            commentContainer.style.color = "green"
            resultValueContainer.appendChild(commentContainer)
        }
    }
})