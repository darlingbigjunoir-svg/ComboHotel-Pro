document.addEventListener("DOMContentLoaded", () => {

  // ---- HAMBURGER MENU ----
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");

      const icon = menuToggle.querySelector("i");

      if (navMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  // ---- TESTIMONIAL SLIDER ----
  const cards = document.querySelectorAll(".testimonial-card");
  const dots = document.querySelectorAll(".dot");
  let current = 0;
  let autoSlide;

  function showSlide(index) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    if (cards[index]) cards[index].classList.add("active");
    if (dots[index]) dots[index].classList.add("active");
    current = index;
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));
      showSlide(index);
      resetAutoSlide();
    });
  });

  function nextSlide() {
    const next = (current + 1) % cards.length;
    showSlide(next);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
  }

  if (cards.length > 0) {
    showSlide(0);
    autoSlide = setInterval(nextSlide, 4000);
  }

});