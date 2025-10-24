// Fade-in effect on scroll
const fadeElements = document.querySelectorAll(".fade-in-up");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));
