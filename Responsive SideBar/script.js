// DOM
let toggler = document.querySelector('.toggler');
let closeBtn = document.querySelector('.btn-close');
let sideMenu = document.getElementById('side-menu');
let mainContent = document.getElementById('main');

// Event listener
toggler.addEventListener('click', openSideMenu);
closeBtn.addEventListener('click', closeSideMenu);

// Open meu
function openSideMenu() {
   sideMenu.style.width = '250px';

   mainContent.style.marginLeft = '260px';
   mainContent.style.transition = '.5s';
}

// Clode menu
function closeSideMenu() {
   sideMenu.style.width = '0px';

   mainContent.style.marginLeft = '0px';
}