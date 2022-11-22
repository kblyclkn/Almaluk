
const menuBtnEl = document.querySelector(".menu-btn");
const toggleEl = document.querySelector(".toggle-icon");
const closeEl = document.querySelector(".close-icon");
const navListEl = document.querySelector(".nav-items-list");

menuBtnEl.addEventListener("click", function () {
  toggleEl.classList.toggle("open");
  closeEl.classList.toggle("open");
  navListEl.classList.toggle("open");
});


