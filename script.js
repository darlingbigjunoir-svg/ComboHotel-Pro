// Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");

    // Swap icon between bars and X
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
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        const icon = menuToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});