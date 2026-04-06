/* ─────────────────────────────────────────
   BLACK PHANTOM ESPORTS — main.js
   ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom cursor ── */
  const cursor      = document.getElementById('cursor');
  const cursorTrail = document.getElementById('cursor-trail');

  let mouseX = 0, mouseY = 0;
  let trailX  = 0, trailY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX - 5 + 'px';
    cursor.style.top  = mouseY - 5 + 'px';
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    cursorTrail.style.left = trailX - 14 + 'px';
    cursorTrail.style.top  = trailY - 14 + 'px';
    requestAnimationFrame(animateTrail);
  }

  animateTrail();

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => revealObserver.observe(el));

  /* ── Navbar scroll state ── */
  const navbar = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.style.background = 'rgba(0,0,0,0.97)';
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    } else {
      navbar.style.background = 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)';
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.04)';
    }
  }, { passive: true });

  /* ── Smooth anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
