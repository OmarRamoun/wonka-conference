const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  logo.style.cursor = 'pointer';
  window.location.href = '/index.html';
});
