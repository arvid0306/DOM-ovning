let inputElem;
let msgElem;

function init(){
    let button;

    inputElem = [];
    inputElem = [1] = document.getElementById("input1");
    inputElem = [2] = document.getElementById("input2");
    inputElem = [3] = document.getElementById("input3");

    msgElem = document.getElementById("message");

    button = document.getElementById("btn1");
    button.addEventListener("click", e =>{
        showFruit();
    })
}

window.onload = init;