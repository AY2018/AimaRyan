let hamburger = document.querySelector(".hamburger")
let navMenu = document.querySelector(".nav-menu")

/* Hamburger menu appears */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active0")
    navMenu.classList.toggle("active")
})

/* Hamburger menu disappears*/
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active0");
    navMenu.classList.remove("active");
}))

/* Double click */
jQuery(function($) {
    $('#golink').click(function() {
        return false;
    }).dblclick(function() {
        window.location = this.href;
        return false;
    });
});

/* Create Jquery */
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

