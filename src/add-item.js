import display from "./display";

export default function AddItem() {
    const content = document.getElementById('content');
    let form = document.createElement('form');

    let title = form.appendChild(document.createElement('input'));
    title.setAttribute('type', "text");
    title.setAttribute('name', "title");
    title.setAttribute('placeholder', "Title");

    let desc = form.appendChild(document.createElement('input'));
    desc.setAttribute('type', "text");
    desc.setAttribute('name', "desc");
    desc.setAttribute('placeholder', "Description");

    let date = form.appendChild(document.createElement('input'));
    date.setAttribute('type', "date");
    date.setAttribute('name', "date");
    date.setAttribute('placeholder', "Due Date");

    let priority = form.appendChild(document.createElement('input'));
    priority.setAttribute('type', "number");
    priority.setAttribute('name', "number");
    priority.setAttribute('placeholder', "Priority");

    let submit = form.appendChild(document.createElement('input'));
    submit.setAttribute('type', 'submit');
    submit.textContent = 'Submit';
    submit.addEventListener('click', () => {
        let button = content.appendChild(document.createElement('button'));
        button.textContent = "Add Item";
        button.addEventListener('click', () => {
            button.parentElement.removeChild(button);
            AddItem();
        });
    });

    content.appendChild(form);
}