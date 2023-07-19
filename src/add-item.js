/* eslint-disable no-restricted-globals */
export default function AddItem() {
  const content = document.getElementById('content');
  const form = document.createElement('form');

  const title = form.appendChild(document.createElement('input'));
  title.setAttribute('type', 'text');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('id', 'title');

  const desc = form.appendChild(document.createElement('input'));
  desc.setAttribute('type', 'text');
  desc.setAttribute('name', 'desc');
  desc.setAttribute('placeholder', 'Description');
  desc.setAttribute('id', 'desc');

  const date = form.appendChild(document.createElement('input'));
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('placeholder', 'Due Date');
  date.setAttribute('id', 'date');

  const priority = form.appendChild(document.createElement('input'));
  priority.setAttribute('type', 'number');
  priority.setAttribute('name', 'number');
  priority.setAttribute('placeholder', 'Priority');
  priority.setAttribute('id', 'priority');

  const submit = form.appendChild(document.createElement('input'));
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';
  submit.addEventListener('click', () => {
    const button = content.appendChild(document.createElement('button'));
    button.textContent = 'Add Item';
    button.addEventListener('click', () => {
      button.parentElement.removeChild(button);
      AddItem();
    });
    let x = 0;
    while (localStorage.getItem(x)) {
      x += 1;
    }
    const obj = {
      title: document.getElementById('title').value,
      desc: document.getElementById('desc').value,
      date: document.getElementById('date').value,
      priority: document.getElementById('priority').value,
    };
    window.dispatchEvent(new StorageEvent('storage', {
      key: x,
      newValue: JSON.stringify(obj),
      url: window.location.href,
      storageArea: localStorage,
    }));
    content.removeChild(form);
    event.preventDefault();
  });

  content.appendChild(form);
}
