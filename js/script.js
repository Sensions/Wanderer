let menuIcon = document.querySelector(".menu__icon");
let menuBody = document.querySelector(".menu__body");

menuIcon.addEventListener("click", function (e) {
  menuBody.classList.toggle("active");
  menuIcon.classList.toggle("active");
  document.body.classList.add("lock");
});

document.addEventListener("click", function (e) {
  if (
    !e.target.closest(".menu__body") &&
    !e.target.closest(".menu__icon") &&
    menuBody.classList.contains("active")
  ) {
    menuIcon.classList.toggle("active");
    menuBody.classList.toggle("active");
    document.body.classList.toggle("lock");
  }
});

let navClose = document.querySelector(".nav__close");

navClose.addEventListener("click", function (e) {
  menuBody.classList.toggle("active");
  menuIcon.classList.toggle("active");
  document.body.classList.toggle("lock");
});
