// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// ── STAGGER CARD ANIMATIONS ──
document.querySelectorAll('.projects-grid, .blog-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
});

// ── CONTACT FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Pesan Terkirim!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = 'Kirim Pesan →';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? '#8B5CF6' : '';
  });
});