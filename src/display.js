export default function display(info) {
    const table = document.querySelector('tbody');
    let row = document.createElement('tr');
    info.forEach(element => {
        let data = document.createElement('td');
        data.textContent = element;
        row.appendChild(data);
    });
    let edit = document.createElement('td');
    let img = edit.appendChild(document.createElement('img'));
    img.src = "pencil-pictogram.svg";
    img.style = "height: 20px;";
    row.appendChild(edit);
    edit.addEventListener('click', () => {

    });

    let del = document.createElement('td');
    del.textContent = 'X';
    del.style = "background-color: red;";
    row.appendChild(del);
    del.addEventListener('click', () => {
        console.log(info.join());
        localStorage.removeItem(localStorage.key(info.join()));
        table.removeChild(row);
        let url = window.location.href;
        window.location.href = url.slice(0, window.location.href.indexOf('?'));
    });


    table.appendChild(row);
}

