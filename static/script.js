// COOL SCROLLING

jQuery(document).ready(function () {
  $(document).ready(function () {
    $('a[href^="#"].my-nav-link').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 0
      }, 900, 'swing', function () {
        window.location.hash = target - 100;
      });
    });
  });
});


// NAV BAR

var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;

function openMenu(event) {

  navButton.classList.toggle('active');
  navMenu.classList.toggle('active');

  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu(event) {
  if (navButton.classList.contains('active')) {
    navButton.classList.remove('active');
    navMenu.classList.remove('active');
  }
}
navButton.addEventListener('click', openMenu, false);

win.addEventListener('click', closeMenu, false);



new WOW().init();