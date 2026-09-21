// JavaScript

// Globala variabler
// Håller referenser till värdena för de olika input
let inputElem;
// Håller referensen till p-taggen "message"
let msgElem;
// Innehåller en array med alla fruktnamn
let fruitNames;
// Innehåller en variabel med numret på vald frukt
let fruitNr;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    let button1;

	inputElem = [];
    inputElem[1] = document.getElementById("input1");
    inputElem[2] = document.getElementById("input2");
    inputElem[3] = document.getElementById("input3");

    msgElem = document.getElementById("message");

    fruitNames = [];
    fruitNames[1] = "äpple";
    fruitNames[2] = "banan";
    fruitNames[3] = "citron";
    fruitNames[4] = "apelsin";
    fruitNames[5] = "päron";

    fruitNr = 0;

    button1 = document.getElementById("btn1");
    button1.addEventListener("click", e=>{
        showFruit();
    })

    button2 = document.getElementById("btn2");
    button2.addEventListener("click", e =>{
        checkName();
    })
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktionen körs när knappen med id "btn1" klickas.
// Funktionen hämtar in värdet från textrutan med id "input1".
// Sedan kontrollerar if-satserna så att det är en siffra och inom rätt intervall.
// Skulle det inte vara det returnas ett felmeddelande i meddelanderutan.
// Därefter omvandlas siffran till heltal och läggs in efter "fruits" så att rätt bild som har rätt nummer hämtas.
// Den sista "msgElem.textConent = ""; används för att tömma felmeddelanderutan när funktionen körs utan problem"
function showFruit(){
    // Håller värdet för det nummer användaren fyller i inuti "input1"
    let nr;
    // Håller värdet för den nya URL som används för att hämta rätt bild
    let fruitUrl;
    // Refererar till img-taggen och används senare för att byta src URL
    let fruitImg;

    nr = inputElem[1].value;

    if(isNaN(nr)){
       msgElem.textContent = "Skriv enbart i nummer, inga andra tecken är tillåtna";

       return;
    }

    if(nr < 1 || nr > 5){
       msgElem.textContent = "Skriv enbart i nummer mellan 1 till 5";

       return;
    }

    nr = parseInt(nr);
    document.getElementById("input1").value = nr;

    fruitUrl = `pics/fruit${nr}.jpg`;

    fruitImg = document.getElementById("fruitImg");
    fruitImg.src = fruitUrl;

    msgElem.textContent = "";

    fruitNr = nr;
}

function checkName(){
    let name;

    name = inputElem[2].value;

    if(fruitNr === 0){
        msgElem.textContent = "Du måste välja en frukt först";
    }

    if(name === fruitNames[fruitNr]){
        msgElem.textContent = "Rätt namn";

        return;
    }
    else{
        msgElem.textContent = "Fel namn";

        return;
    }
}