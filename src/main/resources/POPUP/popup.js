const popup = document.querySelector("dialog")

document.querySelector(".button-container button").addEventListener("click", () => {
    popup.showModal(); //built in function to show popup
});

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
    popup.close();
})