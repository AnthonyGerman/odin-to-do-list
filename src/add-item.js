/* eslint-disable no-restricted-globals */
export default function AddItem(t = '', d = '', da = '', p = '') {
  const content = document.getElementById('content');
  const form = document.createElement('form');
  const button = document.querySelector('button');
  content.removeChild(button);

  const title = form.appendChild(document.createElement('input'));
  title.setAttribute('type', 'text');
  title.setAttribute('name', 'title');
  title.setAttribute('placeholder', 'Title');
  title.setAttribute('id', 'title');
  title.value = t;

  const desc = form.appendChild(document.createElement('input'));
  desc.setAttribute('type', 'text');
  desc.setAttribute('name', 'desc');
  desc.setAttribute('placeholder', 'Description');
  desc.setAttribute('id', 'desc');
  desc.value = d;

  const date = form.appendChild(document.createElement('input'));
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('placeholder', 'Due Date');
  date.setAttribute('id', 'date');
  date.value = da;

  const priority = form.appendChild(document.createElement('input'));
  priority.setAttribute('type', 'number');
  priority.setAttribute('name', 'number');
  priority.setAttribute('placeholder', 'Priority');
  priority.setAttribute('id', 'priority');
  priority.value = p;

  const submit = form.appendChild(document.createElement('input'));
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';
  submit.addEventListener('click', () => {
    content.appendChild(button);
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
