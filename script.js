//alert("hello world");

let menuBtn = document.querySelector(".menu__menu-icon");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavBg = document.querySelector(".mobile-nav__background");

//mobileNav.classList.toggle("mobile-nav__active");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("menu__menu-icon-active");
  mobileNav.classList.toggle("mobile-nav__active");
  mobileNavBg.classList.toggle("mobile-nav__background-active");
});
