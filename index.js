function gaveta(){
    let nav = document.querySelector("header nav");
    let orverlay = document.querySelector("#overlay");
    nav.classList.add("active");
    orverlay.classList.add("active")
}

function fechatGaveta(){
    let nav = document.querySelector("header nav");
    let orverlay = document.querySelector("#overlay");
    nav.classList.remove("active");
    orverlay.classList.remove("active")
}