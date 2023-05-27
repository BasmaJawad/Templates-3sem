async function restDelete(Data) {

    const url = "http://localhost:8080/deleteData" + Data.id
    //opdater tabel på siden med det samme

    const deleteData ={
        method: "DELETE",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(Data)
    }

    const response = await fetch(url, deleteData)

    if (!response.ok){
        alert("failed to delete")

    }
    else {
        alert("deleted")
    }

    return response

}






// HVIS Vi gerne vil fjerne fra en TABEL i html

async function restDelete(Data) {

    const url = "http://localhost:8080/deleteData" + Data.id
    //opdater tabel på siden med det samme

    const deleteData ={
        method: "DELETE",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(Data)
    }

    const response = await fetch(url, deleteData)

    if (!response.ok){
        alert("failed to delete")

    }
    else {
        const table = document.getElementById("tableBody");
        //finder den <tr> med data-userid attribute der har value = user id. (Acesser setAttribute)
        //ALTSÅ er der tidligere sat et data-userid attribute på tr elementet -> tr.setAttribute("data-userid", user.id);
        const row = table.querySelector(`tr[data-userid="${data.id}"]`);
        table.removeChild(row);
    }

    return response

}