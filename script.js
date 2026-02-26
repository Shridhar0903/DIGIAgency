const slides = document.querySelectorAll(".slide");
let index = 0;
slides[0].classList.add("active");

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  index++;
  if (index >= slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");
}

setInterval(showSlide, 3000); // change every 3 seconds

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

// ======================================================================

const counters = document.querySelectorAll(".counter");

const counterobserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const counter = entry.target;
      const target = +counter.getAttribute("data-target");

      if (entry.isIntersecting) {
        startCounter(counter, target);
      } else {
        counter.innerText = "0";
        counter.classList.remove("counting");
      }
    });
  },
  { threshold: 0.6 },
);

counters.forEach((counter) => {
  counterobserver.observe(counter);
});

// ======================================================================

function startCounter(counter, target) {
  if (counter.classList.contains("counting")) return;

  counter.classList.add("counting");

  let count = 0;
  const speed = 150;
  const increment = target / speed;

  function update() {
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  }

  update();
}

// ================= TESTIMONIAL AUTO CAROUSEL =================

const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const outer = document.querySelector(".carousel-outer");

let indexx = 0;
const cardsPerSlide = 3;
const totalSlides = Math.ceil(track.children.length / cardsPerSlide);

function updateSlide() {
  const slideWidth = outer.clientWidth;
  track.style.transform = `translateX(-${indexx * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (indexx < totalSlides - 1) {
    indexx++;
  } else {
    indexx = 0;
  }
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  if (indexx > 0) {
    indexx--;
  } else {
    indexx = totalSlides - 1;
  }
  updateSlide();
});

window.addEventListener("resize", updateSlide);
