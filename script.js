document.addEventListener("DOMContentLoaded", function () {

  /* ---------- HAMBURGER MENU ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu    = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function () {
          navMenu.classList.toggle('open');

          const icon = menuToggle.querySelector('i');
          if (icon) {
              icon.classList.toggle('fa-bars');
              icon.classList.toggle('fa-xmark');
          }
      });

      navMenu.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', function () {
              navMenu.classList.remove('open');
          });
      });

      document.addEventListener('click', function (e) {
          if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
              navMenu.classList.remove('open');
          }
      });
  }

});