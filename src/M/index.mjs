/**
 Disabled Prettier because:

 Prettier is changing this part:

 document.getElementById('site_navigation')
   .style
   .minBlockSize = `${window.innerHeight}px`;

 to

 document.getElementById(
   'site_navigation',
   ).style.minBlockSize = `${window.innerHeight}px`;

 , which is highly undesirable.

 And the override of printWidth in .prettierrc.json5 doesn't work.
 */

'use strict';

{
  /**
   When clicking link to something within the "details" element,
   unfold all parent details elements.

   Should have been implemented in the browser itself.
   No need to check if the first parentElement exists because the "body" element has a parent.
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
}

{
  await Promise.all(
    [...document.querySelectorAll('.email [title="Copy mailto link."]')].map(
      async (mailtoCopyButton) => {
        mailtoCopyButton.addEventListener('click', () => {
          navigator.clipboard
            .writeText(
              'mailto:contact@aquati.cat?subject=Message_to_the_author_of_Monochromatic',
            )
            .then(() => {
              mailtoCopyButton.title = 'mailto link copied!';
              mailtoCopyButton.querySelector('button').ariaLabel = 'mailto link copied!';
            });
        });
      },
    ),
  );
}

{
  const colorSchemeToggleElement = document.querySelector('#colorSchemeToggle');
  const colorSchemeToggleInputElement = colorSchemeToggleElement.querySelector('input');

  const setDarkColorScheme = () => {
    colorSchemeToggleInputElement.checked = true;

    document.body.style
            .setProperty('--fg', 'var(--light)');
    document.body.style
            .setProperty('--bg', 'var(--dark)');

    localStorage.setItem('color-scheme', 'dark');
  };

  const setLightColorScheme = () => {
    colorSchemeToggleInputElement.checked = false;

    document.body.style
            .setProperty('--fg', 'var(--dark)');
    document.body.style
            .setProperty('--bg', 'var(--light)');

    localStorage.setItem('color-scheme', 'light');
  };

  const setColorSchemeAccordingToCheckedState = () => {
    colorSchemeToggleInputElement.checked
      ? (() => {
          setDarkColorScheme();
        })()
      : (() => {
          setLightColorScheme();
        })();
  };

  switch (localStorage.getItem('color-scheme')) {
    case 'dark':
      setDarkColorScheme();
      break;
    case 'light':
      setLightColorScheme();
      break;
    default:
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? (() => {
            setDarkColorScheme();
          })()
        : (() => {
            setLightColorScheme();
          })();
  }

  colorSchemeToggleElement.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code === 'Space') {
      colorSchemeToggleInputElement.checked = !colorSchemeToggleInputElement.checked;

      setColorSchemeAccordingToCheckedState();

      // noinspection JSUnresolvedReference
      colorSchemeToggleElement.blur();
    }
  });

  colorSchemeToggleInputElement.addEventListener('change', () => {
    setColorSchemeAccordingToCheckedState();

    // noinspection JSUnresolvedReference
    colorSchemeToggleElement.blur();
  });
}

{
  window.matchMedia('(width >= 60rem)').matches &&
    (() => {
      document.getElementById('site_navigation-links').open = true;
    })();
}

{
  document.getElementById('site_navigation')
    .style
    .minBlockSize = `${window.innerHeight}px`;
}
