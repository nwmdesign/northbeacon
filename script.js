const button = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');
button.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
}));
