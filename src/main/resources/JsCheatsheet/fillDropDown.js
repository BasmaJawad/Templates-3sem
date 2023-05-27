

//indsæt data i dropdown menu

//HUSK
// lav en select i html, kopier nedestående ind i htmlen
//<select name="Navn-på-attribut-I-Databasen" id="select"> </select>
function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) => response.json())
}


//først henter vi den data vi skal bruge
async function fetchData(){

    const url = "http://localhost:8080/..." /* husk at skrive den rigtige endpoint */

    const data = await fetchAny(url)

    data.forEach(putDataInDropdown)

}

function putDataInDropdown(data){

    const dropdown = document.querySelector("select")

        const option = document.createElement("option")
        option.innerHTML = data.name //kan være hvad som helst inden for dataen
        option.value = data.id  //kan være hvad som helst inden for dataen

        dropdown.appendChild(option)

}

fetchData()