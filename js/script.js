// Our water mountain parallax scroll
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.2 + "px";
  moon.style.left = -value * 0.5 + "px";
  mountain.style.top = -value * 0.5 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
});

// Mobile menu
let menu = document.querySelector("#menu");
let icon = menu.querySelector(".bx-menu");

menu.addEventListener("click", () => {
  if (icon.classList.contains("bx-menu")) {
    icon.classList.replace("bx-menu", "bx-x");
  } else {
    icon.classList.replace("bx-x", "bx-menu");
  }
  document.querySelector(".navbar_menu").classList.toggle("show");
});

// Scroll to top button
let scroll_btn = document.getElementById("scroll_btn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scroll_btn.style.display = "block";
  } else {
    scroll_btn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
