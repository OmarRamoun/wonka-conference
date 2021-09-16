const logo = document.querySelector('.logo');

const logoClick = () => {
  logo.style.cursor = 'pointer';
  logo.addEventListener('click', () => {
    window.location.href = '/index.html';
  });
};
