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

const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

// Load saved mode
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  const icon = darkToggle.querySelector("i");
  icon.classList.replace("bx-moon", "bx-sun");
}

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const icon = darkToggle.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    icon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("dark-mode", "disabled");
  }
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // adjust scroll threshold
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const text = "Full-Stack Python Developer";
const target = document.getElementById("typewriter");
let index = 0;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); // typing speed
  }
}

window.addEventListener("DOMContentLoaded", type);

// Tabs logic
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active from all
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanels.forEach((panel) => panel.classList.remove("active"));

    // Add active to clicked
    btn.classList.add("active");
    const target = btn.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});

const skillsTabs = document.querySelectorAll(".skills-tab");
const skillsPanels = document.querySelectorAll(".skills-panel");

skillsTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active from all
    skillsTabs.forEach((t) => t.classList.remove("active"));
    skillsPanels.forEach((p) => p.classList.remove("active"));

    // activate current
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const swiper = new Swiper(".project-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


const scrollUpBtn = document.getElementById("scrollUp");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add("show");  // add class to slide up
  } else {
    scrollUpBtn.classList.remove("show"); // hide smoothly
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for fixed header
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
