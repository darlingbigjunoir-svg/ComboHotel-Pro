/* =============================================
   script.js — CamboHotel
   Hamburger menu + Testimonial slider
   ============================================= */

/* ---------- HAMBURGER MENU ---------- */
const menuToggle = document.getElementById('menu-toggle');
const navMenu    = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');

        // Swap icon between bars and X
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        }
    });

    // Close nav when a link inside it is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        });
    });

    // Close nav when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('open');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            }
        }
    });
}


/* ---------- TESTIMONIAL SLIDER ---------- */
const cards = document.querySelectorAll('.testimonial-card');
const dots  = document.querySelectorAll('.dot');

let current = 0;
let autoSlide;

function showSlide(index) {
    cards.forEach(function (card) { card.classList.remove('active'); });
    dots.forEach(function (dot)   { dot.classList.remove('active'); });

    if (cards[index]) cards[index].classList.add('active');
    if (dots[index])  dots[index].classList.add('active');

    current = index;
}

function nextSlide() {
    const next = (current + 1) % cards.length;
    showSlide(next);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

if (cards.length > 0 && dots.length > 0) {
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            stopAutoSlide();
            showSlide(i);
            startAutoSlide();
        });
    });

    showSlide(0);
    startAutoSlide();
}