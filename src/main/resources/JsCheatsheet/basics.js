
//--------------------------------------------------------------------------------------------
// Hente elemter fra html
//--------------------------------------------------------------------------------------------

const element = document.getElementById('myElementId');
const elements = document.getElementsByClassName('myClassName');
const elements = document.getElementsByTagName('p');
const elements = document.querySelectorAll('.myClassName');
const element = document.querySelector('#myElementId');




//--------------------------------------------------------------------------------------------
//Tilføj klasser til html elementer (for css)
//--------------------------------------------------------------------------------------------

const element = document.getElementById('myElement');
element.classList.add('myClass');
//fjern
element.classList.remove('myClass');




//--------------------------------------------------------------------------------------------
//ALERTS
//--------------------------------------------------------------------------------------------

alert("Hello World");
confirm("Are you sure?"); //returns true or false




//--------------------------------------------------------------------------------------------
//SET ATTRIBUTE
//--------------------------------------------------------------------------------------------

const button = document.getElementById('myButton');

// Sætter attributten 'btnID' på knappen -- Kan bruges på alle html tags
button.setAttribute('btnID', '1');

//tilgå attributten 'btnID' på knappen
button.getAttribute('btnID'); //returns 1

//find den knap der har attributten 'btnID' med værdien '1'
document.querySelector('button[btnID="1"]'); //returns the button with id 'myButton'



//--------------------------------------------------------------------------------------------
//MATH
//--------------------------------------------------------------------------------------------

const numbers = [5, 2, 8, 1, 9];

Math.max(...numbers); //returns 9 // Returnerer det største tal blandt de angivne værdier.
Math.min(...numbers); //returns 1 // Returnerer det mindste tal blandt de angivne værdier.

Math.random() //Genererer et tilfældigt decimaltal mellem 0 og 1.

Math.floor() //Afrunder et decimaltal nedad til det nærmeste heltal.

Math.ceil() // Afrunder et decimaltal opad til det nærmeste heltal.

Math.round() //Afrunder et decimaltal til det nærmeste heltal ved at anvende matematisk afrunding.





//--------------------------------------------------------------------------------------------
//SET-TIMEOUT
//--------------------------------------------------------------------------------------------

console.log("Før setTimeout");
setTimeout(() => {
    console.log("Efter 2 sekunder");
}, 2000);

console.log("Efter setTimeout");

/*
output:
   Før setTimeout
   Efter setTimeout
   Efter 2 sekunder

 */




//--------------------------------------------------------------------------------------------
//SET- INTERVAL
//--------------------------------------------------------------------------------------------

// kører en funktion gentagende gange som et loop, med et givent interval

let counter = 0;

const intervalId = setInterval(() => {
    console.log(counter);
    counter++;

    if (counter === 5) // køre 5 gange
    {
        clearInterval(intervalId); // Stopper intervallet
    }
}, 1000); // 1000 ms = 1 sekund

//output: udskrive værdierne fra 0 til 4 i konsollen med 1 sekunds mellemrum






//--------------------------------------------------------------------------------------------
//DATO
//--------------------------------------------------------------------------------------------

const currentDate = new Date();

console.log(currentDate); // Udskriver den aktuelle dato og tid i browserens konsol

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Måneder er nulbaserede, så vi tilføjer 1
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(`Dato: ${day}/${month}/${year}`);
console.log(`Tid: ${hours}:${minutes}:${seconds}`);







//--------------------------------------------------------------------------------------------
//
//--------------------------------------------------------------------------------------------