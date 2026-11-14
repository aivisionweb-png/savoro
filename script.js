const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  menuToggle.textContent =
    mobileMenu.classList.contains("active") ? "✕" : "☰";
});


document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});


const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = bookingForm.querySelector("button");

  button.textContent = "REQUEST RECEIVED ✓";

  setTimeout(() => {
    button.textContent = "Request Reservation →";
  }, 3000);
});


const revealElements = document.querySelectorAll(
  ".intro-content, .feature-content, .menu-card, .story-content, .gallery-item, .reservation-inner"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
