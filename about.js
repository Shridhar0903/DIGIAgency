const reveals1 = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  reveals1.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

/* =========================HERO BACKGROUND CAROUSEL========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Change every 5 seconds
setInterval(changeSlide, 5000);

// ================= SCROLL REVEAL =================

const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
      } else {
        entry.target.classList.remove("reveal-active");
      }
    });
  },
  {
    threshold: 0.3,
  },
);
reveals.forEach((el) => observer.observe(el));

// ================= FADE REVEAL =================

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

fadeElements.forEach((el) => fadeObserver.observe(el));
