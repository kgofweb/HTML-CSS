// DOM elements
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Events listner
buttons.forEach(btns => btns.addEventListener('click', chooseSize));
container.addEventListener('mousemove', moveCard);
container.addEventListener('mouseleave', animateOut);
container.addEventListener('mouseenter', animateIn);

function chooseSize() {
   buttons.forEach(btns => btns.classList.remove('active'));
   this.classList.add('active');
}

// Moving animation Event
function moveCard(e) {
   let axisX = ( window.innerWidth / 2 - e.pageX) / 10;
   let axisY = ( window.innerHeight / 2 - e.pageY) / 10;
   card.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
}

// Animate In
function animateIn() {
   card.style.transition = 'none';
   // Pop out
   title.style.transform = 'translateZ(120px)';
   sneaker.style.transform = 'translateZ(200px) rotateZ(-10deg)';
   description.style.transform = 'translateZ(120px)';
   purchase.style.transform = 'translateZ(85px)';
   sizes.style.transform = 'translateZ(75px)';
}

// Animate Out
function animateOut() {
   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
   card.style.transition = 'all .7s ease';
   purchase.style.transition = 'all .7s ease';
   // Pop Back
   title.style.transform = 'translateX(0px)';
   sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
   description.style.transform = 'translateZ(0px)';
   purchase.style.transform = 'translateZ(0px)';
   sizes.style.transform = 'translateZ(0px)'
}