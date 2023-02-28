let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("carousel-image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Scrolling reveal
function reveal() {
  let targets = document.querySelectorAll(".reveal");
  for (let i=0; i<targets.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = targets[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      targets[i].classList.add("active")
    } else {
      targets[i].classList.remove("active")
    }
  }
}
window.addEventListener('scroll', reveal);
reveal();