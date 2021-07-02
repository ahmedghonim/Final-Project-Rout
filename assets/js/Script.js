let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let overlayClick = document.querySelector(".overlay-click");
let newBtn = document.querySelector(".new-btn");

btn.onclick = function () {
    sidebar.classList.toggle("active");
    overlayClick.classList.toggle("active");
    newBtn.classList.toggle("active");
    badget.classList.toggle("active");

    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-x");
    } else {
        btn.classList.replace("bx-x", "bx-menu");
    }
}

// Closing sidebar by click in body
function closeNav() {
    sidebar.classList.toggle("active");
    overlayClick.classList.toggle("active");
    newBtn.classList.toggle("active");
    badget.classList.toggle("active");


    if (btn.classList.contains("bx-menu")) {
        btn.classList.replace("bx-menu", "bx-x");
    } else {
        btn.classList.replace("bx-x", "bx-menu");
    }
}