'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
// Opt-in: data-hero-video am <body> ergänzen, sobald assets/hero.mp4 vorliegt.
const video = document.querySelector('.hero-video');
if (video && document.body.hasAttribute('data-hero-video') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.src = video.dataset.src;
  video.addEventListener('playing', () => video.classList.add('active'));
  video.addEventListener('error', () => video.classList.remove('active'));
  video.play().catch(() => video.classList.remove('active'));
}
