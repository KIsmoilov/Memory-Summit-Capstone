const menu = document.querySelector('.navBar');
const menuItems = document.querySelectorAll('.menuItem');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('popupMenu')) {
    menu.classList.remove('popupMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('popupMenu');
    if (window.outerWidth <= 768) {
      closeIcon.style.display = 'block';
    }
    menuIcon.style.display = 'none';
  }
}

closeIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});