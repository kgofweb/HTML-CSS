// DOM elements
const inputs = document.querySelectorAll('input');

for(let i = 0; i < inputs.length; i++) {
   let field = inputs[i];
   
   field.addEventListener('input', (e) => {
      // Add animation and remove
      if(e.target != '') {
         e.target.parentNode.classList.add('animation');
      } else if(e.target.value != '') {
         e.target.parentNode.classList.remove('animation');
      }
   });
}