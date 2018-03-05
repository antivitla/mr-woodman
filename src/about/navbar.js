'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#navbar .toggle').addEventListener('click', event => {
    document.body.classList.toggle('navbar-active');
  });

  document.querySelector('#navbar .menu').addEventListener('click', event => {
    document.body.classList.remove('navbar-active');
  });

  const spyOn = []
  document.getElementById('navbar').querySelectorAll('ul a[href]').forEach(element => {
    const href = element.getAttribute('href');
    if (href.match(/^#\w/)) {
      spyOn.push(element.getAttribute('href'));
    }
  });

  window.addEventListener('scroll', event => {
    whoIsInView(spyOn);
    trackWelcomeScreen();
  });

  trackWelcomeScreen();
});

function whoIsInView (spies) {
  spies.forEach(spy => {
    const items = document.querySelectorAll('a[href="' + spy + '"]');
    const name = spy.split('#')[1];
    if (isInView(document.getElementById(name), 40)) {
      document.body.classList.add(name + '-section-visible');
    } else {
      document.body.classList.remove(name + '-section-visible');
    }

    if (isInView(document.getElementById(name), 150)) {
      items.forEach(a => a.classList.add('active'));
    } else {
      items.forEach(a => a.classList.remove('active'))
    }
  });
}

function isInView (element, offset = 0) {
  const box = element.getBoundingClientRect();
  return box.top - offset < 0 && box.top + box.height - offset > 0;
}

function trackWelcomeScreen() {
  if (document.body.getBoundingClientRect().top + window.innerHeight < 0) {
    document.body.classList.add('not-first-screen');
  } else {
    document.body.classList.remove('not-first-screen');
  }
}
