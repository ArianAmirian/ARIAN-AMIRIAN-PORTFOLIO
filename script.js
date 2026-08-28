// =========================================================
// MOBIL-MENY: öppna/stäng hamburgarmenyn
// =========================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Stäng menyn automatiskt när man klickar på en länk (mobil)
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// SCROLL-REVEAL: element tonas in när de blir synliga
// =========================================================
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animera bara en gång
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
} else {
  // Om webbläsaren är för gammal: visa allt direkt
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// =========================================================
// TELEFON-KARUSELL: bläddra mellan app-skärmarna
// =========================================================
const track = document.getElementById('phoneTrack');
const prevBtn = document.getElementById('phonePrev');
const nextBtn = document.getElementById('phoneNext');

function scrollByOnePhone(direction) {
  const phone = track.querySelector('.phone');
  if (!phone) return;
  const gap = 20; // motsvarar CSS-gapet mellan telefonerna
  const distance = phone.offsetWidth + gap;
  track.scrollBy({ left: direction * distance, behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => scrollByOnePhone(-1));
nextBtn.addEventListener('click', () => scrollByOnePhone(1));

// =========================================================
// FOOTER: aktuellt år
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();
