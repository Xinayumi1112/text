const interactiveCards = document.querySelectorAll('.hero-copy, .profile-card, .mini-card');

interactiveCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 3.5;
    const rotateX = ((y / rect.height) - 0.5) * -3.5;
    card.style.transform = `translateY(-6px) scale(1.012) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

document.addEventListener('mousemove', (event) => {
  document.body.style.setProperty('--mx', `${event.clientX}px`);
  document.body.style.setProperty('--my', `${event.clientY}px`);
});

let sparkleLock = false;
document.addEventListener('mousemove', (event) => {
  if (sparkleLock) return;
  sparkleLock = true;
  setTimeout(() => sparkleLock = false, 180);

  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';
  sparkle.textContent = Math.random() > 0.5 ? '✦' : '♡';
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  sparkle.style.fontSize = `${10 + Math.random() * 8}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1100);
});
