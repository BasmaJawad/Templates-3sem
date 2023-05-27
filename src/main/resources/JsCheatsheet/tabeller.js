
//der er to måder at access data i et objekt på:

function putDataInTable(data){

    const tableBody = document.getElementById("tableBody")

    const tr = document.createElement("tr")


//FØRSTE METODE:

    tr.innerHTML = //blot eksempler på hvad der kan stå i tabellen
        "<td>" + data.id + "</td>" +
        "<td>" + data.name + "</td>" +
        "<td>" + data.owner_name + "</td>" +
        "<td>" + data.postalCode + "</td>"

//ANDEN METODE:

    tr.innerHTML =
        `<td>${data.id}</td>` +
        `<td>${data.name}</td>` +
        `<td>${data.owner_name}</td>` +
        `<td>${data.postalCode}</td>`



    tableBody.appendChild(tr)

}



//--------------------------------------------------------------------------------------------
// Andet
//--------------------------------------------------------------------------------------------


//Opret en tabelrække (table row) og tilføj den til tabellen:

function addTableRow(tableId, rowData) {
    const table = document.getElementById(tableId);
    const row = document.createElement('tr');

    // Tilføj data til rækken
    rowData.forEach(function(cellData) {
        const cell = document.createElement('td');
        cell.textContent = cellData;
        row.appendChild(cell);
    });

    // Tilføj rækken til tabellen
    table.appendChild(row);
}



//Slet en tabelrække fra tabellen:
function deleteTableRow(tableId, rowIndex) {
    const table = document.getElementById(tableId);

    // Slet rækken på den givne indeksposition
    table.deleteRow(rowIndex);
}


//Opdater en tabelrække med nye data:
function updateTableRow(tableId, rowIndex, rowData) {
    const table = document.getElementById(tableId);
    const row = table.rows[rowIndex];

    // Opdater data i rækken
    rowData.forEach(function(cellData, cellIndex) {
        const cell = row.cells[cellIndex];
        cell.textContent = cellData;
    });
}


//Hent data fra en tabelrække:
function getTableRowData(tableId, rowIndex) {
    const table = document.getElementById(tableId);
    const row = table.rows[rowIndex];
    const rowData = [];

    // Hent data fra rækken
    Array.from(row.cells).forEach(function(cell) {
        rowData.push(cell.textContent);
    });

    return rowData;
}
