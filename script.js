// JavaScript

// Globala variabler

// Håller referenser till elementen för de olika input
let inputElem;

// Håller referensen till p-taggen "message"
let msgElem;

// Innehåller en array med alla fruktnamn
let fruitNames;

// Innehåller numret på vald frukt
let fruitNr;

// Kopplar variablen mot aktuell div i html som senare används för att lägga in img inuti
let selFruitsElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
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

    selFruitsElem = document.getElementById("selectedFruits");

    const button1 = document.getElementById("btn1");
    button1.addEventListener("click", e=>{
        showFruit();
    })

    const button2 = document.getElementById("btn2");
    button2.addEventListener("click", e =>{
        checkName();
    })
    const button3 = document.getElementById("btn3");
    button3.addEventListener("click", e =>{
        addFruits();
    })
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

// Funktionen körs när knappen med id "btn1" klickas.
// Funktionen hämtar in värdet getNr.
// Sedan kontrollerar if-satserna så att det är en siffra och inom rätt intervall, detta görs med funktionen getNr.
// Skulle det inte vara det returnas ett felmeddelande i meddelanderutan.
// Därefter omvandlas siffran till heltal och läggs in efter "fruit" så att rätt bild som har rätt nummer hämtas.
// Den sista "msgElem.textConent = ""; används för att tömma felmeddelanderutan när funktionen körs utan problem"
function showFruit(){
    // Håller värdet för det nummer användaren fyller i inuti "input1"
    let nr;
    // Håller värdet för den nya URL som används för att hämta rätt bild
    let fruitUrl;
    // Refererar till img-taggen och används senare för att byta src URL
    let fruitImg;

    nr = getNr(1, 5);
    if(nr === null){
        return;
    }

    fruitUrl = `pics/fruit${nr}.jpg`;

    fruitImg = document.getElementById("fruitImg");
    fruitImg.src = fruitUrl;

    msgElem.textContent = "";

    fruitNr = nr;
}
// Funktionen körs när btn2 klickas i. Den kollar så att användaren har skrivit in rätt namn på frukten som visas.
// Sedan meddelar den användaren om namn-textrutan har en likadan sträng som fruktens namn i arrayen. Dvs om användaren har skrivit rätt
function checkName(){
    // Håller värdet för strängen i input2
    let name;

    name = inputElem[2].value;

    if(fruitNr === 0){
        msgElem.textContent = "Du måste välja en frukt först";

        return;
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
// Funktionen kontrollerar så att användaren har skrivit ett giltigt nummer i vald input och
// returnerar sedan med null och skriver en kommentar om att skriva ett giltigt nummer eller ett värde på det nummer användaren skrivit fast
// omvandlat till heltal oavsett om användaren skrev decimaltal eller inte.
function getNr(elemNr, high){
    // Håller värdet för vald input.
    let nr;

    nr = inputElem[elemNr].value;

    if(isNaN(nr)){
       msgElem.textContent = "Skriv enbart i nummer, inga andra tecken är tillåtna";

       return null;
    }

    if(nr < 1 || nr > high){
       msgElem.textContent = `Skriv enbart i nummer mellan 1 till ${high}`;

       return null;
    }

    nr = parseInt(nr);
    inputElem[elemNr].value = nr;

    return nr;
}
// Funktionen kontrollerar så at värdet är en siffra och sedan lägger till så många bilder som användaren skrivit i siffror i den tredje textrutan (input3).
// Bilden som läggs till är samma som visas på hemsidan och detta görs genom att funktionen byter ut siffran i namnet på jpg filen mot siffran för den aktuella fruitNr.
// Funktionen hämtar fruitNr från den globala variabeln med samma namn. Därför kan man inte använda denna funktion utan att ha kört showFruit först för då blir siffran 0 (tilldelat inuti init funktionen) och då avslutas funktionen direkt.
function addFruits(){
    // Håller värdet för return från getNr
    let amount;
    // Håller textsträngen som skapas för att lägga in nya img-taggar i html
    let imgList;
    // Används för for-loopen
    let i;

    if(fruitNr === 0){
        return;
    }

    amount = getNr(3, 9);
    if(amount === null){
        return;
    }

    imgList = "";

    for(i = 0; i < amount; i ++){
        imgList += "<img src='./pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
    }

    selFruitsElem.innerHTML += imgList;
}