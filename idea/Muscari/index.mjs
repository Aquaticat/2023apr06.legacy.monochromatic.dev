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
