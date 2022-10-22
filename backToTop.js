const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

const scrollContainer = () => document.documentElement || document.body;

document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove('hidden');
  } else {
    backToTopButton.classList.add('hidden');
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};

backToTopButton.addEventListener('click', goToTop);
