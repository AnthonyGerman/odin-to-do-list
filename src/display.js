export default function display(info) {
  const table = document.querySelector('tbody');
  const row = document.createElement('tr');
  Object.keys(info).forEach((element) => {
    const data = document.createElement('td');
    data.textContent = element;
    row.appendChild(data);
  });
  const edit = document.createElement('td');
  const img = edit.appendChild(document.createElement('img'));
  img.src = 'pencil-pictogram.svg';
  img.style = 'height: 20px;';
  row.appendChild(edit);
  edit.addEventListener('click', () => {

  });

  const del = document.createElement('td');
  del.textContent = 'X';
  del.style = 'background-color: red;';
  row.appendChild(del);
  del.addEventListener('click', () => {
    table.removeChild(row);
  });

  table.appendChild(row);
}
