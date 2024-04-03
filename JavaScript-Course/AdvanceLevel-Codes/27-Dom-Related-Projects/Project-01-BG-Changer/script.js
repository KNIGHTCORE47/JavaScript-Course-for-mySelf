const selectBackground = document.querySelector(".main");

const headingTag = document.querySelector("h1")

const buttonDiv = document.querySelectorAll("span")

buttonDiv.forEach((items) => {
    items.addEventListener("click", (event) => {

        switch (event.target.id) {
            case "grey":
                selectBackground.style.backgroundColor = "grey"
                headingTag.style.color = "white"
                break;
        
            case "blue":
                selectBackground.style.backgroundColor = "blue"
                headingTag.style.color = "white"
                break;
        
            case "red":
                selectBackground.style.backgroundColor = "red"
                headingTag.style.color = "white"
                break;
        
            case "green":
                selectBackground.style.backgroundColor = "green"
                headingTag.style.color = "#212121"
                break;
        
            default:
                break;
        }

    })
})