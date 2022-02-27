const toggleSwitch = document.getElementById("toggle");
const lilBtn = document.getElementById("lil-btn");
const jsBtn = document.getElementById("js-btn");
const mouse = document.getElementById("mouse");
const pointer = document.getElementById("pointer");
const bottomFade = document.getElementById("bottom-fade");
const menuItems = document.getElementsByClassName("menuItems");
const label = document.getElementsByClassName("hamburger-label");

const Mode = localStorage.getItem("theme-preference") || null;

// document.body.addEventListener("wheel", disappearMouseAnimation);

setTimeout(disappearMouseAnimation, 3700);

function disappearMouseAnimation() {
  mouse.style.display = "none";
  pointer.style.display = "none";
}

let counter = 0;

if (Mode == "light-mode") {
  changeTheme();
}

function changeTheme() {
  document.body.classList.toggle("light-mode");
  lilBtn.classList.toggle("right");
  jsBtn.classList.toggle("light-txt");
  bottomFade.classList.toggle("bottom-fade-white");

  if (counter % 2 == 0) {
    localStorage.setItem("theme-preference", "light-mode");
  } else {
    localStorage.setItem("theme-preference", "dark-mode");
  }
  counter++;
}

function closeMenu() {
  label[0].click();
}

toggleSwitch.addEventListener("click", changeTheme);

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", closeMenu);
}
