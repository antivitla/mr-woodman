'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#navbar .toggle').addEventListener('click', event => {
    document.body.classList.toggle('navbar-active');
  });

  const spyOn = []
  document.getElementById('navbar').querySelectorAll('ul.top a[href]').forEach(element => {
    spyOn.push(element.getAttribute('href'));
  });

  window.addEventListener('scroll', event => {
    whoIsInView(spyOn);
  });
})

function whoIsInView (spies) {
  spies.forEach(spy => {
    const items = document.querySelectorAll('a[href="' + spy + '"]');
    if (isInView(document.getElementById(spy.split('#')[1]), 150)) {
      items.forEach(a => a.classList.add('active'))
    } else {
      items.forEach(a => a.classList.remove('active'))
    }
  });
}

function isInView (element, offset) {
  const box = element.getBoundingClientRect();
  return box.top - offset < 0 && box.top + box.height - offset > 0;
}
