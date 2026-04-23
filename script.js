document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  //  HAMBURGER MENU
  // ============================================================
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu    = document.getElementById("nav-menu");

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

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });

    // Close menu when clicking outside nav / toggle
   menuToggle.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent bubbling
  navMenu.classList.toggle("open");
});
       
   


  // ============================================================
  //  TESTIMONIAL SLIDER (index.html only)
  // ============================================================
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


  // ============================================================
  //  SCROLL-SPY — highlight active nav link based on section
  //  (index.html only)
  // ============================================================
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll("nav a");

  function setActiveLink() {
    // Skip scroll-spy on rooms.html (nav active is set in markup)
    if (document.querySelector("header.rooms-header")) return;

    let activeSectionId = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        activeSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (
        href === "#" + activeSectionId ||
        (activeSectionId === "" && (href === "index.html" || href === "./index.html"))
      ) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();


  // ============================================================
  //  ROOMS FILTER (rooms.html only)
  // ============================================================
  const filterPrice = document.getElementById("filter-price");
  const filterType  = document.getElementById("filter-type");
  const roomCards   = document.querySelectorAll(".rooms-card[data-price]");
  const noResults   = document.getElementById("no-results");

  function applyFilters() {
    if (!filterPrice || !filterType || roomCards.length === 0) return;

    const priceVal = filterPrice.value;
    const typeVal  = filterType.value;
    let visibleCount = 0;

    roomCards.forEach(card => {
      const cardPrice = parseInt(card.getAttribute("data-price"), 10);
      const cardType  = card.getAttribute("data-type");

      const priceOk = priceVal === "all" || cardPrice <= parseInt(priceVal, 10);
      const typeOk  = typeVal  === "all" || cardType  === typeVal;

      if (priceOk && typeOk) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (noResults) {
      noResults.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (filterPrice) filterPrice.addEventListener("change", applyFilters);
  if (filterType)  filterType.addEventListener("change", applyFilters);

});