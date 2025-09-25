const text = "Arun Sabu 👋"; 
const typedText = document.getElementById("typed-text");
let index = 0;
let speed = 150;

const chars = Array.from(text);

function typeWriter() {
  if (index < chars.length) {
    typedText.innerHTML += chars[index];
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; 

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const icon = darkToggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.display = "flex";

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); 
  }, 5000); 
});

