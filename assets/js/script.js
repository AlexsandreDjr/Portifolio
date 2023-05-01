document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
  });

function buttonHover(button) {
    button.classList.add("hover");
    setTimeout(function() {
        button.classList.remove("hover");
    }, 200);
}