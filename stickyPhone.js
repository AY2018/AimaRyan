window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky_photos", window.scrollY > 0);
})