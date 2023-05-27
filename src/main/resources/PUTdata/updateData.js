
//opdater data - når objektet hentes fra en localStorage!!

//henter fra localstorage
const savedData = JSON.parse(localStorage.getItem('data'));
document.addEventListener('DOMContentLoaded', function () {
    editData();
});


//FØRST VISER VI DATA I INPUT FIELDS
function editData(){

    //hent først inputfields fra html'en så vi kan udfylde dem

    const data1 = document.getElementById("field1")
    const data2 = document.getElementById("field2")
    const data3 = document.getElementById("field3")

    //udfyld inputfields nu med data fra objektet

    data1.value = savedData.name
    data2.value = savedData.email
    data3.value = savedData.age


}

//nu til knappen der skal poste til db

const updateBtn = document.getElementById("updateBtn")
updateBtn.addEventListener("click", updateData)

function updateData(){

    //først hentes de nye værdier fra inputfields
    const inputFields = document.querySelectorAll('.updateInputField');

    //tjekker for alle felter og opdaterer objektet hvis der er ændringer

    inputFields.forEach(inputField => {
        const fieldName = inputField.name;
        const fieldValue = inputField.value.trim(); //trimmer mellemrum

        if (fieldValue !== savedData[fieldName]) {
            savedData[fieldName] = fieldValue;
        }
    });

    postUpdatedData();
}

async function postUpdatedData() {
    const url = "http://localhost:8080/updateData/" + savedData.id; //eller anden nøgle der skal bruges til at finde objektet

    const updatedData = {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(savedData)
    }

    //calls backend and wait for return
    const response = await fetch(url, updatedData);

    if (!response.ok) {
        alert("Det gik ikke godt med update");
    };
    window.location.href = "fil.html"
    return response;
}