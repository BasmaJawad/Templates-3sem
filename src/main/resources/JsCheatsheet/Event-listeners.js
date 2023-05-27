

//--------------------------------------------------------------------------------------------
// Indlæsning af dokumentet
//--------------------------------------------------------------------------------------------

//læser html'en først
document.addEventListener('DOMContentLoaded', function() {
    // Din event handler-logik her
});

//læser html, scripts og billeder først
document.addEventListener('load', function() {
    // Din event handler-logik her
});






//--------------------------------------------------------------------------------------------
//Event listeners
//--------------------------------------------------------------------------------------------



//Inline event handler - i html'en
// <button onclick="handleClick()">Klik her</button> ---- handleclick() er en funktion i JS filen



//Event listeners - i JS filen


//DOM-elementets egenskab: onclick
const button = document.getElementById('myButton');
button.onclick = handleClick;


//Event listeners
const button = document.getElementById('myButton');
button.addEventListener('click', handleClick);


//Anonym funktion
button.addEventListener('click', function () {
    console.log('Button clicked!');
})


//Arrow funktion
button.addEventListener('click', () => {
    handleClick();
})

//Andre events

/*
"click": Udløses, når et element klikkes på med musen.
"mouseover": Udløses, når musen bevæger sig over et element.
"mouseout": Udløses, når musen forlader et element.
"keydown": Udløses, når en tast på tastaturet trykkes ned.
"keyup": Udløses, når en tast på tastaturet løftes.
"change": Udløses, når værdien af et input-element eller en dropdown ændres.
"submit": Udløses, når en formular sendes ved at trykke på en submit-knap eller ved hjælp af JavaScript-metoden .submit().
"focus": Udløses, når et element får fokus (f.eks. ved at klikke på det eller navigere til det med tastaturet).
"blur": Udløses, når et element mister fokus (f.eks. når brugeren klikker uden for elementet eller navigerer væk fra det med tastaturet).
"scroll": Udløses, når en elementets rulleposition ændres (f.eks. når en bruger scroller op eller ned på en side).
"load": Udløses, når en side eller et billede er fuldt indlæst.

 */






