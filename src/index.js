import AddItem from './add-item';
import display from './display';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  button.parentElement.removeChild(button);
  AddItem();
});

window.addEventListener('storage', (event) => {
  display(JSON.parse(event.newValue));
});
