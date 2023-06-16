// Cache DOM Elements
const date = document.getElementById("date");
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const scrollLinks = document.querySelectorAll(".scroll-link");

// Arrow Functions
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

document.addEventListener("click", e => {
  if (e.target.matches(".scroll-link")) {
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    window.scrollTo({
      left: 0,
      top: element.offsetTop - 62,
      behavior: "smooth"
    });
  }
});

// Set Date
date.innerHTML = new Date().getFullYear();
