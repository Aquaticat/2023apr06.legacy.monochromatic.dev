'use strict';


{
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
}

{
  /**
   * FIXedME: Why is this changing the location of the "button"?
   *        Update: Got it, because I was using the [title=""] selector in CSS.
   *                I'll just add the new selector besides it, then.
   */
  await Promise.all([...(document.querySelectorAll('.email [title="Copy mailto link."]'))]
                        .map(async (mailtoCopyButton) => {
                          mailtoCopyButton.addEventListener('click', () => {
                            navigator.clipboard.writeText(
                                         'mailto:contact@aquati.cat?subject=Message_to_the_author_of_Monochromatic')
                                     .then(() => {
                                       mailtoCopyButton.title = 'mailto link copied!';
                                       mailtoCopyButton.querySelector('button').ariaLabel = 'mailto link copied!';
                                     });
                          });
                        }));
}

{
  const colorSchemeToggleElement = document.querySelector('#colorSchemeToggle');
  const colorSchemeToggleInputElement = colorSchemeToggleElement.querySelector('input');

  const setDarkColorScheme = () => {
    colorSchemeToggleInputElement.checked = true;
    document.documentElement.style.setProperty('--foreground', 'white');
    document.documentElement.style.setProperty('--background', 'black');
    localStorage.setItem('color-scheme', 'dark');
  };

  const setLightColorScheme = () => {
    colorSchemeToggleInputElement.checked = false;
    document.documentElement.style.setProperty('--foreground', 'black');
    document.documentElement.style.setProperty('--background', 'white');
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

      colorSchemeToggleElement.blur();
    }
  });


  colorSchemeToggleInputElement.addEventListener('change', () => {
    setColorSchemeAccordingToCheckedState();

    colorSchemeToggleElement.blur();
  });
}
