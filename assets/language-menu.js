(function () {
  'use strict';

  document.querySelectorAll('.language').forEach(function (language, index) {
    var button = language.querySelector('.language-button');
    var menu = language.querySelector('.language-menu');
    if (!button || !menu) return;

    var menuId = menu.id || 'language-menu-' + (index + 1);
    menu.id = menuId;
    button.setAttribute('aria-controls', menuId);
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('role', 'menu');
    menu.querySelectorAll('a').forEach(function (link) {
      link.setAttribute('role', 'menuitem');
    });

    function setOpen(open) {
      language.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      setOpen(!language.classList.contains('is-open'));
    });

    document.addEventListener('click', function (event) {
      if (!language.contains(event.target)) setOpen(false);
    });

    language.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setOpen(false);
        button.focus();
      }
    });
  });

  document.querySelectorAll('.ginovo-lang').forEach(function (language, index) {
    var button = language.querySelector(':scope > a');
    var menu = language.querySelector(':scope > .ginovo-dropdown-wrap');
    if (!button || !menu) return;

    var menuId = menu.id || 'putting-language-menu-' + (index + 1);
    menu.id = menuId;
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', 'Select language');
    button.setAttribute('aria-controls', menuId);
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');

    function setOpen(open) {
      language.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      setOpen(!language.classList.contains('is-open'));
    });
    document.addEventListener('click', function (event) {
      if (!language.contains(event.target)) setOpen(false);
    });
    language.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        setOpen(false);
        button.focus();
      }
    });
  });
}());
