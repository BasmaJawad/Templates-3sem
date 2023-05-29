
//--------------------------------------------------------------------------------------------
// hent data fra DB og put i tabellen
//--------------------------------------------------------------------------------------------

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}

async function fetchData(){

    const url = "http://localhost:8080/getAllData" /* husk at skrive den rigtige endpoint */

    const data = await fetchAny(url)

    data.forEach(putDataInTable)

}

function putDataInTable(data){

    const tableBody = document.getElementById("tableBody")

    const tr = document.createElement("tr")

    tr.innerHTML = //blot eksempler på hvad der kan stå i tabellen
        "<td>" + data.id + "</td>" +
        "<td>" + data.name + "</td>" +
        "<td>" + data.owner_name + "</td>" +
        "<td>" + data.postalCode + "</td>"

    tableBody.appendChild(tr)

}

fetchData()





//--------------------------------------------------------------------------------------------
// hent data fra DB og put i tabellen MED KNAPPER - i stedet for function putDataInTable(data)
//--------------------------------------------------------------------------------------------


/* hvis der skal være KNAPPER i tabellen som man kan klikke videre på*/

function putDataInTableWButton(data, index){

    //Index er det reservationens nummer/plads i arrayet, som for each loop selv kan tælle op for os
    //så hver knap har en unik id der består af index tallet
    //knappen har hele dataen som value

    const tableBody = document.getElementById("tableBody")

    const tr = document.createElement("tr")

    tr.innerHTML =
        "<td>" + data.id + "</td>" +
        "<td>" + data.name + "</td>" +
        "<td>" + data.email + "</td>" +
        "<td>" + data.age + "</td>"+
        "<td>" +
        "<button class='dataRowBtn' id='rowBtn" + index + "' value='" + data + "'>vælg</button>" +
        "</td>"

    tableBody.appendChild(tr)

    //hent knappen fra tabellen
    const btn = document.getElementById("rowBtn" + index);

    //Knappen skal have en eventlistener
    btn.addEventListener("click", () => {

        //her skal der stå hvad der skal gøres
        //fx put data i localstorage

        localStorage.setItem("data", JSON.stringify(data))

    })


}