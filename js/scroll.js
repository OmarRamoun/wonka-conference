const inputStart = 1;
const inputEnd = 3;
const outputStart = 0;
const OutputEnd = 1;
const navbar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  const y = Math.round(1 + (window.scrollY || window.pageYOffset) / 150);
  const firstMultiplier = (y - inputStart) / (inputEnd - inputStart);
  const opacity = firstMultiplier * (OutputEnd - outputStart) + outputStart;
  navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
});
