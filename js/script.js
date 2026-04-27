document.addEventListener("DOMContentLoaded", function () {

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

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('#nav-menu a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});


function changeMain(thumb) {
  const mainImg = document.getElementById('mainRoomImg');
  if (!mainImg) return;

  mainImg.src = thumb.src;
  mainImg.alt = thumb.alt;

  
  document.querySelectorAll('.room-thumbs img').forEach(img => {
    img.style.borderColor = 'transparent';
  });
  thumb.style.borderColor = '#c47f00';
}