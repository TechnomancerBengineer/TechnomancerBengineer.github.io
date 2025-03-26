// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle mobile menu
  mobileToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Animation on scroll for service cards
  const serviceCards = document.querySelectorAll(".service-card");

  function checkScroll() {
    serviceCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (cardTop < windowHeight * 0.8) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  // Initialize service cards
  serviceCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Check scroll position on load and scroll
  window.addEventListener("load", checkScroll);
  window.addEventListener("scroll", checkScroll);

  // Animated counter for statistics
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  function animateNumbers() {
    if (animated) return;

    const statsSection = document.querySelector(".stats-grid");
    const statsSectionTop = statsSection.getBoundingClientRect().top;

    if (statsSectionTop < window.innerHeight * 0.8) {
      statNumbers.forEach((stat) => {
        const targetNumber = parseInt(stat.textContent);
        let currentNumber = 0;
        const increment = Math.ceil(targetNumber / 50);
        const duration = 1500; // 1.5 seconds
        const interval = duration / (targetNumber / increment);

        const counter = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= targetNumber) {
            stat.textContent = targetNumber + "+";
            clearInterval(counter);
          } else {
            stat.textContent = currentNumber + "+";
          }
        }, interval);
      });

      animated = true;
    }
  }

  window.addEventListener("scroll", animateNumbers);

  // Form submission handling
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulate API call delay
      setTimeout(() => {
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});
