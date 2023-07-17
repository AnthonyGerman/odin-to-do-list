import { toDo } from "./to-do";
import AddItem from "./add-item";
import display from "./display";

let list = [];
let x = 0;
while(localStorage.getItem(x)) {
    if (!list.includes(localStorage.getItem(x))) {
        list.push(localStorage.getItem(x));
    }
    x += 1;
}
localStorage.clear();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    button.parentElement.removeChild(button);
    AddItem();
});

let url = window.location.href;
if (url.includes('title')) {
    let short = url.slice(url.indexOf('?'));
    let values = short.split('=');
    values.shift();
    values[0] = values[0].slice(0, values[0].indexOf('&'));
    values[1] = values[1].slice(0, values[1].indexOf('&'));
    values[2] = values[2].slice(0, values[2].indexOf('&'));
    if (!list.includes(values.toString())) {
        localStorage.setItem(list.length, values.toString());
        list.push(values.toString());
    }
}

let y = 0;
while (list[y]) {
    display(list[y].split(','));
    localStorage.setItem(y, list[y]);
    y += 1;
}