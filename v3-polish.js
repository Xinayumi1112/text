const v3Cards = document.querySelectorAll('.hero-copy,.profile-card,.mini-card');

v3Cards.forEach(card => {
  card.addEventListener('mousemove', event => {
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--card-x', `${x}%`);
    card.style.setProperty('--card-y', `${y}%`);
  });
});

let heartTimer = 0;
document.addEventListener('mousemove', event => {
  document.body.style.setProperty('--mx', `${event.clientX}px`);
  document.body.style.setProperty('--my', `${event.clientY}px`);

  const now = Date.now();
  if (now - heartTimer < 900) return;
  heartTimer = now;

  if (!document.body.classList.contains('about-open')) return;
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > .5 ? '♡' : '✦';
  heart.style.left = `${event.clientX + (Math.random() * 22 - 11)}px`;
  heart.style.top = `${event.clientY + (Math.random() * 22 - 11)}px`;
  heart.style.fontSize = `${12 + Math.random() * 9}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2300);
});

const aboutCards = document.querySelectorAll('.about-grid > *');
aboutCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 90}ms`;
});
