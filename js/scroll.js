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

for (let i = 0; i < 10; i += 1) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('box');
  newDiv.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
  document.body.appendChild(newDiv);
}
