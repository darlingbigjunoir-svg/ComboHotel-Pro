document.addEventListener("DOMContentLoaded", () => {

  
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu    = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");

      const icon = menuToggle.querySelector("i");
      if (navMenu.classList.contains("open")) {
        icon.classList.replace("fa-bars", "fa-xmark");
      } else {
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });

  
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
      });
    });

    
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
      }
    });
  }

  
  const cards = document.querySelectorAll(".testimonial-card");
  const dots  = document.querySelectorAll(".dot");
  let current = 0;
  let timer;

  function showSlide(index) {
    cards.forEach(c => c.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    if (cards[index]) cards[index].classList.add("active");
    if (dots[index])  dots[index].classList.add("active");

    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % cards.length);
  }

  function startAuto() {
    timer = setInterval(nextSlide, 4000);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(parseInt(dot.getAttribute("data-index"), 10));
      resetAuto();
    });
  });

  if (cards.length > 0) {
    showSlide(0);
    startAuto();
  }

  
  const sections = document.querySelectorAll("section[id], header, footer[id]");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === "#" + current || (current === "" && href === "index.html")) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);

});