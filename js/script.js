const logo = document.querySelector('.logo');

// make the logo redirect to the home page
logo.addEventListener('click', () => {
  logo.style.cursor = 'pointer';
  window.location.href = '/index.html';
});
