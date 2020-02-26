//key-value storage

//local storage - per domain
//session storage - per tab

let names = [];

+function init() {
    names = JSON.parse(localStorage.getItem('names')) || [];
    drawTable(names);
}();

function save() {
    let input = document.getElementById('name');
    names.push(input.value);
    localStorage.setItem('names', JSON.stringify(names));

    drawTable(names);
}

function drawTable(names) {

    clearTable();
    let table = document.getElementById('names');
    for (let name of names) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerText = name;
    }
}

function clearTable() {
    let table = document.getElementById('names');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}

//bilingual or mother tongue
//full professional proficiency
