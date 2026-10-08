const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const themeToggle = document.querySelector('.theme-toggle');
const cursorGlow = document.querySelector('.cursor-glow');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const light = body.classList.contains('light-theme');
  themeToggle.textContent = light ? '☀' : '◐';
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle.textContent = '☀';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

window.addEventListener('mousemove', event => {
  if (window.innerWidth > 800) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
});
