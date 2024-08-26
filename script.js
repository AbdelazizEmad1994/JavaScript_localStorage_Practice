// Dynamic color selector application.

// Initializing Variables

let experiment_div = document.querySelector("div")

let unlist = document.querySelector("ul")

let list_items = document.querySelectorAll("li")


// Global add event listener, for list items.

document.addEventListener("click", function (e) {
    
    if (e.target.tagName === 'LI') {
        
        document.querySelector(".active").setAttribute("class", "")
        let element1 = e.target
        element1.className = "active"
        window.localStorage.color = element1.getAttribute("data-color")
        experiment_div.style.backgroundColor = element1.getAttribute("data-color")
                

    }
})

// Setting the color for div element, based on user's choice and the active status of the list items. 

for (let i = 0; i <= list_items.length; i++){
    if (window.localStorage.getItem("color") === list_items[i].getAttribute("data-color")) {
        list_items[i].className = "active"
    experiment_div.style.backgroundColor = window.localStorage.getItem("color")
        }
}


