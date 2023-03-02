// Navbar Start Here
let navbar = document.querySelector(".navbar");
let navLink = document.querySelector(".navbar-nav");
let bar = document.querySelector(".hamburger-menu");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
  lastScrollTop = scrollTop;
});

bar.addEventListener("click", (event) => {
  event.preventDefault();
  navLink.classList.toggle("active");
  bar.classList.toggle("active");

  if (navLink.classList.contains("active")) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

let nav = document.querySelectorAll(".nav-link");

nav.forEach((e) => {
  e.addEventListener("click", () => {
    navLink.classList.remove("active");
    bar.classList.remove("active");
    navbar.classList.remove("fixed");
  });
});

// Navbar Active Class Start Here
let active = document.querySelectorAll(".nav-link");

document.addEventListener("click", (event) => {
  if (!event.target.closest(".navbar-nav") && !event.target.closest(".hamburger-menu")) {
    navLink.classList.remove("active");
    bar.classList.remove("active");
    navbar.classList.remove("fixed");
  }
});

// Typed js
let options = {
  strings: ["Creative Agency", "TYped Js is awesome"],
  typeSpeed: 120,
  loop: true,
  loopCount: Infinity,
  backDelay: 3000,
};

let typed = new Typed("#hero-typed", options);

// Animate On Scroll
AOS.init();
