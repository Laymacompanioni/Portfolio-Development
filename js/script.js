// executing myFunction for when user scrolls the page
window.onscroll = function () {myFunction()};

//Getting my header
let header = document.getElementById("header");

//getting offset position for my navbar
let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }else {
        header.classList.remove("sticky")
    }
}
