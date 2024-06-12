//*****************Bind method ********************//

class React {
    constructor() {
        this.library = "React"
        this.server = "https://localhost:3000/"

        /* NOTE --> Business Requirement - 
                            01. Like whenever the page loads create a new React object 
                                    
                            02. After that we get the reference of the button and create a methode like handleClick() to give us a message in console.log() */

        document
            .querySelector("button")
            .addEventListener("click", this.handleClick.bind(this))
    }

    handleClick() {
        console.log("button clicked".toUpperCase());
        console.log(this);
        console.log(this.server);
    }

    
}

const app = new React()