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
const container = document.querySelector('.image-container');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

container.addEventListener('mousedown', dragStart);
container.addEventListener('touchstart', dragStart);

container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag);

container.addEventListener('mouseup', dragEnd);
container.addEventListener('touchend', dragEnd);

container.addEventListener('mouseleave', () => {
  isDragging = false;
});

function dragStart(event) {
  if (event.type === 'touchstart') {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }
  isDragging = true;
}
function drag(event) {
  if (isDragging) {
    let currentPosition;
    if (event.type === 'touchmove') {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }
    currentTranslate = prevTranslate + currentPosition - startPosition;
    setTranslate(currentTranslate);
  }
}

function dragEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;
}

function setTranslate(translate) {
  container.style.transform = `translateX(${translate}px)`;
}