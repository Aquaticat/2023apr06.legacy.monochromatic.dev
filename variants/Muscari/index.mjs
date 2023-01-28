'use strict';


/**
 * When clicking link to something within the "details" element,
 * unfold all parent details elements.
 *
 * Should have been implemented in the browser itself.
 * No need to check if the first parentElement exists because the "body" element has a parent.
 */
window.onhashchange = () => {
  const element = document.getElementById(location.hash.slice(1));

  if (element instanceof HTMLDetailsElement) {
    element.setAttribute('open', '');
  }

  let { parentElement } = element;

  while (parentElement.parentElement) {
    if (parentElement instanceof HTMLDetailsElement) {
      parentElement.setAttribute('open', '');
    }

    parentElement = parentElement.parentElement;
  }
};

const colorSchemeToggleInputElement = document.querySelector('#colorSchemeToggle input');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  colorSchemeToggleInputElement.checked = true;
}

colorSchemeToggleInputElement.addEventListener('change', () => {
  colorSchemeToggleInputElement.checked
    ? (() => {
        document.documentElement.style.setProperty('--foreground', 'white');
        document.documentElement.style.setProperty('--background', 'black');
      })()
    : (() => {
        document.documentElement.style.setProperty('--foreground', 'black');
        document.documentElement.style.setProperty('--background', 'white');
      })();
});
