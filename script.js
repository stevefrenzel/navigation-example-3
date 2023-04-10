'use strict';

const skipLink = document.getElementById('skip-link');
const menuLinks = document.querySelectorAll('nav a');

// Add aria-current="page" to selected link, except for skip link

menuLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    if (event.target !== skipLink) {
      menuLinks.forEach((link) => link.removeAttribute('aria-current'));
      this.setAttribute('aria-current', 'page');
    }
  });
});
