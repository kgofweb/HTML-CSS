// DOM HANDLE
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// background
document.body.style.backgroundImage = 'url(./img/bg.jpg)';
document.body.style.backgroundSize = 'cover';

// Local Storage Function
// Get Name 
function getName() {
   if (localStorage.getItem("name") === null) {
      name.textContent = '[Enter name]';
   } else {
      name.textContent = localStorage.getItem("name");
   }
}

// Save Items
function setName(event) {
   if (event.type === 'keypress') {
      if (event.wich == 13 || event.keyCode == 13) {
         localStorage.setItem("name", event.target.innerText);
         event.preventDefault();
      }
   } else {
      localStorage.setItem("name", event.target.innerText);
   }
}

// Get Focus
function getFocus() {
   if (localStorage.getItem("focus") === null) {
      focus.textContent = '[Enter focus]';
   } else {
      focus.textContent = localStorage.getItem("focus");
   }
}

// Save Items
function setFocus(event) {
   if (event.type === 'keypress') {
      if (event.wich == 13 || event.keyCode == 13) {
         localStorage.setItem("focus", event.target.innerText);
         focus.blur();
      }
   } else {
      localStorage.setItem("focus", e.target.innerText);
   }
}

// Call Function 
getName();
getFocus();