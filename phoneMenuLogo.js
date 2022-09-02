let logo2 = document.querySelector(".logo_moving2")
let navMenuuu = document.querySelector(".nav-menu")

/* Hamburger menu appears */
logo2.addEventListener("click", () => {
    navMenuuu.classList.toggle("active")
})

/* Hamburger menu disappears*/
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    logo2.classList.remove("active0");
    navMenuuu.classList.remove("active");
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

