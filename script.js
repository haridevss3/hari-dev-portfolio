const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .work-card, .photo-grid img, .service-list > div').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
