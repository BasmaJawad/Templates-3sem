//når man skal gemme et objekt i local storage

function saveToLocalStorage(data) {
localStorage.setItem("data", JSON.stringify(data))
}

//hent Json ojekt fra local storage
function getFromLocalStorage() {
const data = JSON.parse(localStorage.getItem("data"))
}

//check om der er noget i local storage key
function checkLocalStorage() {

    const storedObject = localStorage.getItem('data');

    if (storedObject) {
        const storedObject = JSON.parse(storedJsonString);
//...
    }
}

//slet fra local storage
function removeFromLocalStorage() {

localStorage.removeItem("data")
}

