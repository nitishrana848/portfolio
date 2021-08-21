var hamburgerlines1 = document.getElementsByClassName("hamburgerlines1");



hamburgerlines1[0].addEventListener('click', function () {
    console.log("hello")
    var lines11 = document.getElementById("line11");
    var lines21 = document.getElementById("line21");
    var lines31 = document.getElementById("line31");
    var hamburger1 = document.getElementsByClassName("hamburger1");
    var menu = document.getElementsByClassName("menu-items1");
    lines11.classList.toggle("line111");
    lines21.classList.toggle("line211");
    lines31.classList.toggle("line311");
    hamburger1[0].classList.toggle("hamburger12");
    menu[0].classList.toggle("menu-items12");
});