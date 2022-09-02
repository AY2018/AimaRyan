// Get the container element
var btnContainer = document.querySelector(".videosMenu");
var videoContainer = document.querySelector(".videosGallery")

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("videoBtn");
var vds = videoContainer.getElementsByClassName("videoItem");

    
console.log(vds[0])


// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("currentButton");
    var currentVid = document.getElementsByClassName("currentVideo");

    current[0].className = current[0].className.replace("currentButton", "");
    this.className += " currentButton";

    var index = parseInt(this.id)-1
    currentVid[0].className = currentVid[0].className.replace("currentVideo", "");
    vds[index].className += " currentVideo";
    

  });
}