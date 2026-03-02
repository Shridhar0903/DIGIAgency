const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.2 },
);

reveals.forEach((el) => observer.observe(el));

//==================================================

const dropdown = document.querySelector(".dropdown");
const dropdownIcon = document.querySelector(".dropdown-icon");

// Only toggle when clicking icon
dropdownIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// Close when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

//==================================================

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

//=====================================================================

const reveals1 = document.querySelectorAll(".reveal-left, .reveal-right");

const observer1 = new IntersectionObserver(
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
reveals1.forEach((el) => observer1.observe(el));

//==================================================================
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
